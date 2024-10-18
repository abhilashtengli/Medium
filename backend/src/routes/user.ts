import { Context, Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify, decode } from "hono/jwt";
import { getCookie, setCookie } from "hono/cookie";
import { singinInput, singupInput } from "../zod";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c: Context) => {
  const body = await c.req.json();
  const { success } = singupInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs are not valid"
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  try {
    const userExist = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    });

    if (userExist) {
      return c.json({
        message: "User already exists"
      });
    }

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name
      }
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    setCookie(c, "token", token, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: true, // Ensures the cookie is only sent over HTTPS
      sameSite: "Strict", // Strict SameSite policy for security
      path: "/" // Cookie is valid for the whole site
    });
    return c.json({
      message: "User created successfully",
      token: token
    });
  } catch (err) {
    c.status(401);
    return c.json({
      message: "Error : " + err
    });
  }
});

userRouter.post("/signin", async (c: Context) => {
  const body = await c.req.json();
  const { success } = singinInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "Inputs are not valid" });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  try {
    const userExists = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    });

    if (!userExists) {
      c.status(403);
      return c.json({
        message: "Invalid user Credentials"
      });
    }
    const password = body.password;
    if (password !== userExists.password) {
      return c.json({
        message: "Invalid password"
      });
    }

    const token = await sign({ id: userExists.id }, c.env.JWT_SECRET);

    setCookie(c, "token", token, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: true, // Ensures the cookie is only sent over HTTPS
      sameSite: "Strict", // Strict SameSite policy for security
      path: "/" // Cookie is valid for the whole site
    });

    return c.json({
      message: "Successfully signed in"
    });
  } catch (err) {
    c.status(401);
    return c.text("Invalid");
  }
});
