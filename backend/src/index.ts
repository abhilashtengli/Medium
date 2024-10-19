import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  cors({
    origin: "http://localhost:5173", //You need to whitelist the domain to avoid Cors
    credentials: true
  })
);
app.options("/*", cors());

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;
