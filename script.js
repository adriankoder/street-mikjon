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


{
    "errors" [
      {
        "message": "Something went wrong (RequestID: clwm0urew0dd706uqg8o78o72). Please contact us in Slack (https://slack.hygraph.com) or via email (support@hygraph.com).",
        "locations": [
          {
            "line": 2,
            "column": 3
          }
        ],
        "extensions": {
          "code": "GRAPHQL_VALIDATION_FAILED",
          "requestID": "clwm0urew0dd706uqg8o78o72"
        }
      }
    ]
  }