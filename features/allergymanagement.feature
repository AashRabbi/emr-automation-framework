
Feature: AllergyManagement Functionality
  As a healthcare professional
  I want to interact with the AllergyManagement module
  So that I can manage allergymanagement tasks efficiently

  Scenario: Navigate to AllergyManagement page
    Given I am logged in as "admin"
    When I navigate to the AllergyManagement page
    Then I should see the AllergyManagement UI elements

  Scenario: Perform action on AllergyManagement
    Given I am logged in as "admin"
    When I perform action on AllergyManagement with value "test-value"
    Then I should see the state as "Action completed"

  Scenario: Perform complex action on AllergyManagement
    Given I am logged in as "admin"
    When I perform complex action on AllergyManagement with value "complex-test" and option "option2"
    Then I should see the state as "Complex action completed"
