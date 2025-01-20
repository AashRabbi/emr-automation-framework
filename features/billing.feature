
Feature: Billing Functionality
  As a healthcare professional
  I want to interact with the Billing module
  So that I can manage billing tasks efficiently

  Scenario: Navigate to Billing page
    Given I am logged in as "admin"
    When I navigate to the Billing page
    Then I should see the Billing UI elements

  Scenario: Perform action on Billing
    Given I am logged in as "admin"
    When I perform action on Billing with value "test-value"
    Then I should see the state as "Action completed"

  Scenario: Perform complex action on Billing
    Given I am logged in as "admin"
    When I perform complex action on Billing with value "complex-test" and option "option2"
    Then I should see the state as "Complex action completed"
