const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const trainerSchema = new Schema({
    username: {
        type: String,
        required: "USERNAME is required",
        unique: "true",
        trim: "true"
    },
    email: {
        type: String,
        required: "EMAIL is required",
        unique: "true",
        match: [/.+@.+\..+/, "Must match an email format"]
    },
    password: {
        type: String,
        required: "PASSWORD is required",
        minlength: 7,
    },
    //array of object id's that point to pokemon collection
    pokemon: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Pokemon'
        }
    ]
})

const Trainer = model('Trainer', trainerSchema)

module.exports = Trainer