Feature: Validating the Data on d/f basis and storing in d/f ways 
         also test the DataTable Handling and fetching the multiData sets 
         and perform the actions on it.



Background: Perform siimilar steps for every created feature here ..
           Given User should launch url successfully.
           When user enter username and password tahn he login successfully

@dataTable
Scenario: Take the Data of list in wdio and store it in Arrays and Objects and use 
          it furthur and perform multiple actions.
          When User store multiple of Data by passing value and click.   
          And user store all the values in array and perform action.
          And user store all the values in Objects and perform action.
          Then user handling the DataTable Values 
          Then get a Single row based data from the dataTable 
          Then get a Single cell value data from the dataTable 
          And get single cell value and print the corrosponding username when price gets satisfied from DataTable