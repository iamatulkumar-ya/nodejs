
const template = Object.freeze(

    `<div style="padding:2rem 5rem 5rem 5rem">  
      <div style="font-family:'calibri'; font-weight:400 !important;"> 
        <h1 style="font-size:55px;"> Welcome to NodeJsStreet</h1>  
        <h2 style="font-size:35px;"> Kindly find the below API details:</h2>  
        <div style="font-size:18px;"> 
          <p> {url}/v1/StreetUsers : To get all users details</p>    
          <p> {url}/v1/StreetUsers/{id} : To get specific user details</p>  
        </div>
      </div>
    </div>`

  );


  module.exports = template;

