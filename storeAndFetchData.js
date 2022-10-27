const { Student } = require("./config");

const storeDataToDatabase = async (name, id, email, mobile) =>{
    try {
        // create a document and store to the database
        const newStudent = await Student.create({
          name: name,
          ID: id,
          email: email,
          mobile: mobile
        });
        if(newStudent){
            // return newStudent
            console.log("Data stored successfully")
        }
    } catch (error) {
      console.log(error)
    }
  }

  // get student information
const getDataFromDatabase = async () =>{
    try {
        const students = await Student.find({});
        if(students){
        //   return students
        console.log(students)   
        }
    } catch (error) {
      console.log(error)
    }
}

module.exports = {storeDataToDatabase, getDataFromDatabase};