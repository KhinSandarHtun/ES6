const { Schema, model } = require('mongoose')   

const imgSchema = new Schema({
    profile: {
        type: String,
        default: ""
    },
},
    {
        timestamps: true
    }   
);
const Image = model("image", imgSchema)
module.exports = { Image };
    