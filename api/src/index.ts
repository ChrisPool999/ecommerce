import express from "express";
import cors from "cors";
import productRoute from "./routes/products.ts"
import authRoute from "./routes/auth.ts"
import usersRoute from "./routes/users.ts"
import cartRoute from "./routes/cart.ts"
import checkoutRoute from "./routes/checkout.ts"
import cookieParser from "cookie-parser"

const app = express();
const port = 5000;

app.use(cookieParser())

app.use(
  cors({
    origin: ["http://localhost:3000", "https://ecommerce-web-sze7.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"]
  })
);

app.use('/images', express.static('public'));
app.use(express.json())

app.get("/", (_req, res) => {
  res.send("Hello from TypeScript + Express + Nodemon + ESM\n");
});

app.get("/products", productRoute)
app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/cart", cartRoute)
app.use("/checkout", checkoutRoute)

app.listen(port,"0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});