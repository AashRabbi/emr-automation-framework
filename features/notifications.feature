
Feature: Notifications Functionality
  As a healthcare professional
  I want to interact with the Notifications module
  So that I can manage notifications tasks efficiently

  Scenario: Navigate to Notifications page
    Given I am logged in as "admin"
    When I navigate to the Notifications page
    Then I should see the Notifications UI elements

  Scenario: Perform action on Notifications
    Given I am logged in as "admin"
    When I perform action on Notifications with value "test-value"
    Then I should see the state as "Action completed"

  Scenario: Perform complex action on Notifications
    Given I am logged in as "admin"
    When I perform complex action on Notifications with value "complex-test" and option "option2"
    Then I should see the state as "Complex action completed"
