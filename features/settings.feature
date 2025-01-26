
Feature: Settings Functionality
  As a healthcare professional
  I want to interact with the Settings module
  So that I can manage settings tasks efficiently

  Scenario: Navigate to Settings page
    Given I am logged in as "admin"
    When I navigate to the Settings page
    Then I should see the Settings UI elements

  Scenario: Perform action on Settings
    Given I am logged in as "admin"
    When I perform action on Settings with value "test-value"
    Then I should see the state as "Action completed"

  Scenario: Perform complex action on Settings
    Given I am logged in as "admin"
    When I perform complex action on Settings with value "complex-test" and option "option2"
    Then I should see the state as "Complex action completed"
