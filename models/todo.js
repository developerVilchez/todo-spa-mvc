var mongoose = require('mongoose');
var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'El nombre no puede ser un campo vacio'
    },

    completed : {
        type : Boolean,
        default: false
    },

    create_date: {
        type: Date,
        default: Date.now(),
    }


})

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;