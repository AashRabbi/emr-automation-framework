
Feature: PatientSearch Functionality
  As a healthcare professional
  I want to interact with the PatientSearch module
  So that I can manage patientsearch tasks efficiently

  Scenario: Navigate to PatientSearch page
    Given I am logged in as "admin"
    When I navigate to the PatientSearch page
    Then I should see the PatientSearch UI elements

  Scenario: Perform action on PatientSearch
    Given I am logged in as "admin"
    When I perform action on PatientSearch with value "test-value"
    Then I should see the state as "Action completed"

  Scenario: Perform complex action on PatientSearch
    Given I am logged in as "admin"
    When I perform complex action on PatientSearch with value "complex-test" and option "option2"
    Then I should see the state as "Complex action completed"
