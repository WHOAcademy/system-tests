Feature: Present interest topic
  Show topics in the onboarding page

  Scenario: Show topics from the onboarding page
    Given There are topics in system
    When I navigate through the onboarding page
    Then I am shown available topics