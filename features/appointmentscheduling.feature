
Feature: AppointmentScheduling Functionality
  As a healthcare professional
  I want to interact with the AppointmentScheduling module
  So that I can manage appointmentscheduling tasks efficiently

  Scenario: Navigate to AppointmentScheduling page
    Given I am logged in as "admin"
    When I navigate to the AppointmentScheduling page
    Then I should see the AppointmentScheduling UI elements

  Scenario: Perform action on AppointmentScheduling
    Given I am logged in as "admin"
    When I perform action on AppointmentScheduling with value "test-value"
    Then I should see the state as "Action completed"

  Scenario: Perform complex action on AppointmentScheduling
    Given I am logged in as "admin"
    When I perform complex action on AppointmentScheduling with value "complex-test" and option "option2"
    Then I should see the state as "Complex action completed"
