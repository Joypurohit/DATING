var mongoose = require("mongoose");
var likeSchema=mongoose.Schema({
 id:{
          type: mongoose.Schema.Types.ObjectId,
           ref: "User"
        
 }
});
module.exports = mongoose.model("Like", likeSchema);
