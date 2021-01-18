Feature: Onboarding
  Sign me up and steal all my info

  Scenario: sign up from the home page button
    Given I go to LXP
    When I hit sign up button
    Then I am taken to sign up page

  #Scenario: Add education to profile
    #Given someone has just registered
    #When they land on the onboarding page
    #Then they are asked to submit their eductational background

  #Scenario: Show skills and pick three and their level
    #Given There are skills in system
    #When I navigate through the onboarding process
    #Then I am shown available skills
    #And I select three and sumbit

  #Scenario: Show topics from the onboarding page
    #Given There are topics in system
    #When I navigate through the onboarding process to topics
    #Then I am shown available topics
    #And I select three interests and sumbit
