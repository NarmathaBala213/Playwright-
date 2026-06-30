Feature: Login

Scenario: Successful Login

  Given User opens login page
  When User enters username "standard_user"
  And User enters password "secret_sauce"
  And User clicks Login button
  Then User should navigate to products page