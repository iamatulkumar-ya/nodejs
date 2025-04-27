 

class SearchMedicine  {

     
    validate_request_input(requestBody) {

        if (requestBody === undefined)
        {
            return new Response({"status":400})
             
        }


        let err =  new Error("request body is undefined")
        err.statusCode = 400
        throw err
    }

}


module.exports = SearchMedicine