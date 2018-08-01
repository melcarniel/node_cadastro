module.exports = function (app){
    var Paciente = app.models.eventos;
    
    var EventosController = {
        menu: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/menu', params);
        },

        cadPaciente: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/cadPaciente', params);
        },

        listaPacientes: function (request, response) {
            Paciente.find(function(erro, pacientes){
                if (erro){
                    response.redirect('/menu')
                }
                else {
                    var usuario = request.session.usuario,
                    params = { usuario: usuario, paciente: pacientes };
                response.render('eventos/listaPacientes', params);
                }
            }).sort({nome: 1});
            
           
        },

         novoPaciente: function (request, response) {
            var nome = request.body.paciente.nome;
            var telefone = request.body.paciente.telefone;
            var nascimento = request.body.paciente.nascimento.split('/');
            var objDate = new Date(nascimento[2], nascimento[1] - 1, nascimento[0]);
            var convenio = request.body.paciente.convenio;

            var paciente = {
                nome: nome,
                telefone: telefone,
                nascimento: objDate,
                convenio: convenio
            };
            
            Paciente.create(paciente, function(erro, paciente){
                if (erro){
                    response.redirect('/cadPaciente');
                } else {
                    response.redirect('/menu');
                }
            });

        }

        
    };
    return EventosController;
}