const mongoose=require("mongoose")
const dotenv=require("dotenv")
const ProductModel=require("./models/Product")
const UserModel=require("./models/User")
const CartModel=require("./models/Cart")
const productsData=require("./Data/products")

dotenv.config();
// connect to mongodb
mongoose.connect(process.env.MONGO_URI)

// function to seed data
const seedData =async()=>{
  try{
    //clear existing data
    await ProductModel.deleteMany();
    await UserModel.deleteMany();
    await CartModel.deleteMany();
    // create a default admin user
    const createdUser=await UserModel.create({
      name:"Admin User",
      email:"rup@example.com",
      password:"rup",
      role:"admin"
    });

    // Assign the default user ID to each product
    const userID=createdUser._id;

    const sampleProducts=productsData.map((product)=>{
      return {...product,user:userID}
    })
    // inser the products info into the database
    await ProductModel.insertMany(sampleProducts);
    console.log("Product data seeded successfully");
    process.exit();

    
  }
  catch(error){
    console.error("Error seeding the data :" ,error)
    process.exit(1);
  }
}
seedData();