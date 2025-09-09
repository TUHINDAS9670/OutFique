const express = require("express");
const cors=require("cors")
const dotenv=require("dotenv");
const connectDB=require("./config/db")
const userRoutes=require("./Routes/userRoutes")
const productRoutes=require("./Routes/productRoutes")
const CartRoutes=require("./Routes/cartRoutes")
const CheckOutRoutes=require("./Routes/checkoutRoutes")
const OrderRoutes=require("./Routes/OrderRoutes")
const UploadRoutes=require("./Routes/UploadRoutes")
const SubscriberRoutes=require("./Routes/SubscriberRoutes")
const adminRoutes=require("./Routes/AdminRoutes")
const productAdminRoutes=require("./Routes/productAdminRoutes")
const AdminOrderRoutes=require("./Routes/AdminOrderRoutes")

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT=process.env.PORT || 9000;

// connect mongodb
connectDB();


app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/cart",CartRoutes);
app.use("/api/checkout",CheckOutRoutes);
app.use("/api/orders",OrderRoutes);
app.use("/api/upload",UploadRoutes);
app.use("/api",SubscriberRoutes);

//Admin
app.use("/api/admin/users",adminRoutes)
app.use("/api/admin/products",productAdminRoutes);
app.use("/api/admin/orders",AdminOrderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  
});
