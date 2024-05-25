fetch("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clwkn2brr00b407uy3rh7z99z/master")
.then(Response => {if(!response.ok) {throw new error("kan ikke fetch resurs");}
    return response.json();

})
.then-(data => console.log(data))
.catch(error => console.error(error));

// {
//     "data": {
//       "assets": []
//     }
//   }