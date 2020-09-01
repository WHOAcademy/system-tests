Feature: Sign up
  Sign me up

  Scenario: sign up from the nav bar button
    Given I go to LXP
    When I hit sign up button
    Then I am taken to sign up page
  
  Scenario: Add education to profile
    Given someone has just registered
    When they land on the onboarding page
    Then they are asked to submit their eductational background