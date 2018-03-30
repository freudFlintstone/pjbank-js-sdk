'use strict';



class Recebimento {

    constructor(credencial, chave) {
        this._credencial_conta = credencial;
        this._chave_conta = chave;
    }

    credenciar(dadosEmpresa) {
        let endpoint = `recebimentos`;
        let headers = {
            "Content-type": "application/json"
        };

        return APIClient.post(endpoint, dadosEmpresa, null, headers);
    }

}

module.exports = Recebimento;