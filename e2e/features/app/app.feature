Feature: Landing page
  Display the title

  Scenario: show landing page
    Given I know the address of LXP
    When I navigate to it
    Then I am displayed the landing page