
Feature: Login Functionality
  As a healthcare professional
  I want to interact with the Login module
  So that I can manage login tasks efficiently

  Scenario: Navigate to Login page
    Given I am logged in as "admin"
    When I navigate to the Login page
    Then I should see the Login UI elements

  Scenario: Perform action on Login
    Given I am logged in as "admin"
    When I perform action on Login with value "test-value"
    Then I should see the state as "Action completed"

  Scenario: Perform complex action on Login
    Given I am logged in as "admin"
    When I perform complex action on Login with value "complex-test" and option "option2"
    Then I should see the state as "Complex action completed"
