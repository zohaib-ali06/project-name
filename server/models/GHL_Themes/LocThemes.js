
const { Schema, model, default: mongoose } = require('mongoose')

const themeSchema = new mongoose.Schema({
    loc_id     : { type: String },
    theme_id : { type: String }

}, {timestamps: true})

const LocThemeModel=mongoose.model("loc_themes",themeSchema)

module.exports=LocThemeModel;