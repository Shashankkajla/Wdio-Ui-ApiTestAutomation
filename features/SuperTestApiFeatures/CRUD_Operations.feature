Feature: Write Test Cases To Perform and Validate the CRUD Operations 
         in Way2Automation swagger Application.


@PostApiTest
Scenario: Create a Test Case To Perform Post Call and validate 
          the response.
          Given user details to create a new dynamic payload and postPayloadLocn
          Then validate user baseuri path "http://localhost:8080" and endpoint "/api/users"
          Then perform  POST Operation on given path 
          Then validate the status code of the POST call 201
    



 





