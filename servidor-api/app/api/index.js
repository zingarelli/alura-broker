/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}


api.dados = function(req, res) {

    res.json([
        { simbolo: 'AMZN', valor: 200.5, quantidade: 2 },
        { simbolo: 'NFLX', valor: 100.2, quantidade: 5 },
        { simbolo: 'AAPL', valor: 50.5, quantidade: 1 },
        { simbolo: 'TSLA', valor: 70.5, quantidade: 2 }
    ]);
    
};


module.exports = api;