module.exports = function (app){
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var paciente = Schema({
        nome: {type: String, required: true},
        telefone: {type: Number},
        nascimento: {type: Date},
        convenio: {type: String}
    });
    return mongoose.model('pacientes', paciente);

    
};

