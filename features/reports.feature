
Feature: Reports Functionality
  As a healthcare professional
  I want to interact with the Reports module
  So that I can manage reports tasks efficiently

  Scenario: Navigate to Reports page
    Given I am logged in as "admin"
    When I navigate to the Reports page
    Then I should see the Reports UI elements

  Scenario: Perform action on Reports
    Given I am logged in as "admin"
    When I perform action on Reports with value "test-value"
    Then I should see the state as "Action completed"

  Scenario: Perform complex action on Reports
    Given I am logged in as "admin"
    When I perform complex action on Reports with value "complex-test" and option "option2"
    Then I should see the state as "Complex action completed"
