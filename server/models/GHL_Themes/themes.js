
const { Schema, model, default: mongoose } = require('mongoose')

const themeSchema = new mongoose.Schema({
    name     : { type: String },
    css_path : { type: String },
    type : { type: String },
    img_path : { type:String },
    description : { type: String }

}, {timestamps: true})

const ThemeModel=mongoose.model("themes",themeSchema)

module.exports=ThemeModel;