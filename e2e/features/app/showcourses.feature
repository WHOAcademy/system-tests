Feature: Show Courses
  Show Courses in the landing page

  Scenario: Show courses from the landing page
    Given I'm an un-authenticated user
    When I go to the landing page
    Then I am shown all the courses