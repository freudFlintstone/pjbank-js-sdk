'use strict';



module.exports = (() => {

    let endpoint = "bancos";
    
    let headers = {
        "Content-type": "application/json"
    };

    return APIClient.get(endpoint, {}, headers);

});