const { connectDB } = require("./config");
const { storeDataToDatabase, getDataFromDatabase } = require("./storeAndFetchData");

// connect to mongodb
connectDB();

// initialize new data for insert to the database
/** Should change everytime when you want insert a
  new data on database. Otherwise, it will give a 
  MongoDB duplicate key error  */
const name = "Rakibul";
const ID = "2165465";
const email = "xzy@mail.com";
const mobile = "1635465654";
// call the store function to store some data to the database
storeDataToDatabase(name, ID, email, mobile)

// get data from database
getDataFromDatabase()