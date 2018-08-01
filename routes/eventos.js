module.exports = function (app) {
    var valida = require('./../middlewares/valida');
    var eventos = app.controllers.eventos;
    
    app.get('/menu', valida, eventos.menu);
    app.get('/cadPaciente', valida, eventos.cadPaciente);
    app.get('/listaPacientes', valida, eventos.listaPacientes);

    app.post('/novoPaciente', eventos.novoPaciente);
    

}