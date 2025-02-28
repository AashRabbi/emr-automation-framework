
Feature: ImmunizationRecords Functionality
  As a healthcare professional
  I want to interact with the ImmunizationRecords module
  So that I can manage immunizationrecords tasks efficiently

  Scenario: Navigate to ImmunizationRecords page
    Given I am logged in as "admin"
    When I navigate to the ImmunizationRecords page
    Then I should see the ImmunizationRecords UI elements

  Scenario: Perform action on ImmunizationRecords
    Given I am logged in as "admin"
    When I perform action on ImmunizationRecords with value "test-value"
    Then I should see the state as "Action completed"

  Scenario: Perform complex action on ImmunizationRecords
    Given I am logged in as "admin"
    When I perform complex action on ImmunizationRecords with value "complex-test" and option "option2"
    Then I should see the state as "Complex action completed"
