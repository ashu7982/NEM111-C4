

// const express=require("express");
// const { connection } = require("./db");
// const { userRouter } = require("./Routes/user.routes");
// const { PostRouter } = require("./Routes/post.routes");
// const cors = require('cors');
// require("dotenv").config();


// const app=express();
// app.use(cors());
// app.use(express.json());

// app.use("/users",userRouter);
// app.use("/posts",PostRouter);



// const PORT = process.env.PORT || 8080;

// app.listen(PORT, async () => {
//   try {
//     await connection;
//     console.log("Our database is  connected");
//     console.log(`Server is running on port ${PORT}`);
//   } catch (error) {
//     console.error(error);
//   }
// });






const express=require("express")
const { connection } = require("./db")
const { userRouter } = require("./Routes/user.routes")
const { PostRouter } = require("./Route/post.routes")
const cors = require('cors')


const app=express()
app.use(cors())
app.use(express.json())

app.use("/users",userRouter)
app.use("/posts",PostRouter)



app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("our database is connected");
    } catch (error) {
        
    }
   
})
