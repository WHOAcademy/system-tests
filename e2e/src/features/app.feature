Feature: Landing page
  Display the page title and some courses

  Scenario: show landing page
    Given I know the address of LXP
    When I navigate to it
    Then I am displayed the landing page

  Scenario: Show CTAs from the landing page
    Given I'm an un-authenticated user
    When I go to the landing page
    Then I am shown login and signup buttons
