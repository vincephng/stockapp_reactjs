const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();

const port = process.env.PORT || 3001;
const PostRoutes = require('./routes/PostRoutes')
const userData = require('./routes/userPageRoute')
const cookieParser = require('cookie-parser')

dotenv.config();

app.use(cors({origin: ["http://localhost:3000"],
              methods: ["GET", "POST"],
              credentials: true,}))
app.use(express.json());
app.use(cookieParser())

mongoose.connect(process.env.MB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log("Successfully access to Mongo Database"))


    if(process.env.NODE_ENV==='production')
{
    app.use(express.static(path.join(__dirname,"client/build")));
    app.get("*",(req,resp)=>{
        resp.sendFile(path.join(__dirname,"client","build","index.html"));
    })
}

app.use('/stock/app',PostRoutes)
app.use('/app',userData)
app.listen(port, () => {console.log(`Connection Success on: ${port}`)});
