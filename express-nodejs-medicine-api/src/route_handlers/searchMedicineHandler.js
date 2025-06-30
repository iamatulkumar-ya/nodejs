// File to handle the searchmedicine request 

class SearchMedicineHandler  {
    constructor()
    {
        const searchMedicineService = require('../modules/search-medicine/searchMedicineService.js');
        this.searchMedicineServiceOBJ = new searchMedicineService();
    }

    validate_request_input(requestBody) { 

        console.log(this.searchMedicineServiceOBJ.get)
        if (requestBody === undefined)
        {
            return new Response({"status":400})
             
        }


        let err =  new Error("request body is undefined")
        err.statusCode = 400
        throw err
    }

}


module.exports = SearchMedicineHandler;