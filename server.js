const express = require("express");
const app = express();

app.put("/editUser/:id",(req,res)=>{
    console.log(req.params);
    res.send("Success")
})


app.listen(3000, () => {
    console.log("Server is running at port 3000");
});
