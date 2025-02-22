
Feature: MedicalHistory Functionality
  As a healthcare professional
  I want to interact with the MedicalHistory module
  So that I can manage medicalhistory tasks efficiently

  Scenario: Navigate to MedicalHistory page
    Given I am logged in as "admin"
    When I navigate to the MedicalHistory page
    Then I should see the MedicalHistory UI elements

  Scenario: Perform action on MedicalHistory
    Given I am logged in as "admin"
    When I perform action on MedicalHistory with value "test-value"
    Then I should see the state as "Action completed"

  Scenario: Perform complex action on MedicalHistory
    Given I am logged in as "admin"
    When I perform complex action on MedicalHistory with value "complex-test" and option "option2"
    Then I should see the state as "Complex action completed"
