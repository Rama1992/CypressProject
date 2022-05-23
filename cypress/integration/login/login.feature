Feature: Verifying the login functionality

  Scenario: Logging with valid credentials
    Given I launch the website
    And I provide valid username
    And I provide valid password
    When I click on Login button
    Then I see Products page
