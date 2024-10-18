import { Context, Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify, decode } from "hono/jwt";
import { getCookie } from "hono/cookie";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const token = getCookie(c, "token") || "";

  try {
    const user = await verify(token, c.env.JWT_SECRET);
    if (user && typeof user === "object" && "id" in user) {
      c.set("userId", user.id as string);
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "You are not logged in"
      });
    }
  } catch (err) {
    c.status(403);
    return c.json({ message: "You are not logged in" });
  }
});

blogRouter.post("/", async c => {
  const body = await c.req.json();
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId
    }
  });

  return c.json({
    id: blog.id
  });
});

blogRouter.put("/", async c => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const blog = await prisma.post.update({
    where: {
      id: body.id
    },
    data: {
      title: body.title,
      content: body.content
    }
  });

  return c.json({ id: blog.id });
});

blogRouter.get("/bulk", async c => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const blog = await prisma.post.findMany();

  return c.json({
    data: blog
  });

  return c.text("Hello Hono!");
});

blogRouter.get("/:id", async c => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: id
      }
    });
    return c.json({
      data: blog
    });
  } catch (err) {
    c.status(411);
    return c.json({
      message: "Error while fetching the blogs"
    });
  }
});
