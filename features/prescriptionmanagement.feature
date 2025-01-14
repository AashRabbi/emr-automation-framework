
Feature: PrescriptionManagement Functionality
  As a healthcare professional
  I want to interact with the PrescriptionManagement module
  So that I can manage prescriptionmanagement tasks efficiently

  Scenario: Navigate to PrescriptionManagement page
    Given I am logged in as "admin"
    When I navigate to the PrescriptionManagement page
    Then I should see the PrescriptionManagement UI elements

  Scenario: Perform action on PrescriptionManagement
    Given I am logged in as "admin"
    When I perform action on PrescriptionManagement with value "test-value"
    Then I should see the state as "Action completed"

  Scenario: Perform complex action on PrescriptionManagement
    Given I am logged in as "admin"
    When I perform complex action on PrescriptionManagement with value "complex-test" and option "option2"
    Then I should see the state as "Complex action completed"
