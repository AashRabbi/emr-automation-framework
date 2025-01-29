
Feature: UserManagement Functionality
  As a healthcare professional
  I want to interact with the UserManagement module
  So that I can manage usermanagement tasks efficiently

  Scenario: Navigate to UserManagement page
    Given I am logged in as "admin"
    When I navigate to the UserManagement page
    Then I should see the UserManagement UI elements

  Scenario: Perform action on UserManagement
    Given I am logged in as "admin"
    When I perform action on UserManagement with value "test-value"
    Then I should see the state as "Action completed"

  Scenario: Perform complex action on UserManagement
    Given I am logged in as "admin"
    When I perform complex action on UserManagement with value "complex-test" and option "option2"
    Then I should see the state as "Complex action completed"
