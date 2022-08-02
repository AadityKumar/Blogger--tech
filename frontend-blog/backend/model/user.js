// Creating model video-27
const mongoose=require('mongoose')
let userSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: {type:String, 
        required: true 
           },
      email:  {
        type:String, 
        required: true,
        index: {
            unique: true, 
        },
        match:/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    
      },
      password:  {
        type:String, 
        required: true
    },
    role:  {
      type:String, 
      required: true
    },
    date:{
      type: Date, 
      default: Date.now }
    });

module.exports=mongoose.model('blog-users',userSchema);   // (collection/table(same from db) ,    );