
Feature: Feedback Functionality
  As a healthcare professional
  I want to interact with the Feedback module
  So that I can manage feedback tasks efficiently

  Scenario: Navigate to Feedback page
    Given I am logged in as "admin"
    When I navigate to the Feedback page
    Then I should see the Feedback UI elements

  Scenario: Perform action on Feedback
    Given I am logged in as "admin"
    When I perform action on Feedback with value "test-value"
    Then I should see the state as "Action completed"

  Scenario: Perform complex action on Feedback
    Given I am logged in as "admin"
    When I perform complex action on Feedback with value "complex-test" and option "option2"
    Then I should see the state as "Complex action completed"
