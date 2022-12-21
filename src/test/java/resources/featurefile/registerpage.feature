Feature: Register page
  As a user i want to register with nopcommerce website

  @smoke
  @regression
  Scenario: User should navigate to register page successfully
    Given I am on homepage
    When I click on Register link
    Then I should navigate to register page successfully

  @sanity
  @regression
  Scenario:Verify that firstName,lastName,email,password and confirmPassword fields are mandatory
    Given I am on homepage
    When I click on Register link
    And I click on register button
    Then Verify the firstName error message
    And Verify the lastName error message
    And Verify the email error message
    And Verify the password error message
    And Verify the confirmPassword error message

  @regression
  Scenario: Verify that user should create account successfully
    Given I am on homepage
    When I click on Register link
    And I click on female radio button
    And I enter firstname "Manan"
    And I enter lastname "Shah"
    And I select date of birth "12","June","1999"
    And I enter email "mshah123@gmail.com"
    And I enter password "password123"
    And I enter confirm password "password123"
    And I click on register button
    Then I should see message Your registration completed


