import { Context, Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify, decode } from 'hono/jwt'
import {getCookie, setCookie} from 'hono/cookie'

const app = new Hono()

app.post('/api/v1/user/signup', async(c : Context) => {
  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())


 const body = await c.req.json();

 const userExist = await prisma.user.findUnique({
  where: {
    email : body.email
  }
 })

 if(userExist){
  return c.json({
    message : "User already exists"
  })
 }

 const user = await prisma.user.create({
  data : {
    email: body.email,
    password: body.password
  }
 })

 //@ts-ignore
 const token = await sign({id : user.id}, c.env.JWT_SECRET)

 //@ts-ignore
 setCookie(c, 'token', token, {
  httpOnly: true,  // Prevents client-side JavaScript from accessing the cookie
  secure: true,    // Ensures the cookie is only sent over HTTPS
  sameSite: 'Strict',  // Strict SameSite policy for security
  path: '/',       // Cookie is valid for the whole site
})
  return c.json({
    message: 'User created successfully',
    token : token
  })
})


app.post('/api/v1/user/signin', async(c : Context) => {

  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

 const body = await c.req.json();  

 const userExists = await prisma.user.findUnique({
  where: {
    email : body.email
  }
 })

 if(!userExists){
  return c.json({
    message : "User Does not Exists"
  })
 }

 const token = getCookie(c, 'token')

 if (!token) {
  return c.json({
    message: 'Token not found'
  }, 401) // Return a 401 if the token is missing
}

  return c.text('Hello Hono!')
})

app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})
app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})
app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})
app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Hello Hono!')
})

export default app
