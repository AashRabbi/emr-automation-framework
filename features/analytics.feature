
Feature: Analytics Functionality
  As a healthcare professional
  I want to interact with the Analytics module
  So that I can manage analytics tasks efficiently

  Scenario: Navigate to Analytics page
    Given I am logged in as "admin"
    When I navigate to the Analytics page
    Then I should see the Analytics UI elements

  Scenario: Perform action on Analytics
    Given I am logged in as "admin"
    When I perform action on Analytics with value "test-value"
    Then I should see the state as "Action completed"

  Scenario: Perform complex action on Analytics
    Given I am logged in as "admin"
    When I perform complex action on Analytics with value "complex-test" and option "option2"
    Then I should see the state as "Complex action completed"
