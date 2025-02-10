
Feature: Help Functionality
  As a healthcare professional
  I want to interact with the Help module
  So that I can manage help tasks efficiently

  Scenario: Navigate to Help page
    Given I am logged in as "admin"
    When I navigate to the Help page
    Then I should see the Help UI elements

  Scenario: Perform action on Help
    Given I am logged in as "admin"
    When I perform action on Help with value "test-value"
    Then I should see the state as "Action completed"

  Scenario: Perform complex action on Help
    Given I am logged in as "admin"
    When I perform complex action on Help with value "complex-test" and option "option2"
    Then I should see the state as "Complex action completed"
