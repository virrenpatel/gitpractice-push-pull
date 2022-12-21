Feature: Login Test
  As a user I would like to login into nop commerce website
  @smoke
  @regression
  Scenario: User should navigate to login page successFully
    Given I am on homepage
    When I click on login link
    Then I should navigate to login page successfully
  @sanity
  @regression
  Scenario: Verify the error message with invalid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "123test@gmail.com"
    And I enter Password "password123"
    And I click on Login button
    Then I am unable to login with invalid credentials

  @regression
  Scenario: Verify that user should login successfully with valid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "123test@gmail.com"
    And I enter Password "password123"
    And I click on Login button
    Then I should login successfully with valid credentials

  @regression
  Scenario: Verify that user should logOut successFully
    Given I am on homepage
    When I click on login link
    And I enter email "123test@gmail.com"
    And I enter Password "password123"
    And I click on Login button
    And I click on logout link
    Then I should logOut successFully and i should see login link

