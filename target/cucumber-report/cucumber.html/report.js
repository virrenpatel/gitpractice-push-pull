$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerpage.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As a use I want to go on computer page",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4649210900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user should navigate to computer page successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Computer Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I Verify Computer text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 96588800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 926895400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyComputerText()"
});
formatter.result({
  "duration": 35637200,
  "status": "passed"
});
formatter.after({
  "duration": 675894800,
  "status": "passed"
});
formatter.uri("loginpage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a user I would like to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2754747400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successFully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 16700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 847127600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 33705200,
  "status": "passed"
});
formatter.after({
  "duration": 673553800,
  "status": "passed"
});
formatter.uri("registerpage.feature");
formatter.feature({
  "line": 1,
  "name": "Register page",
  "description": "As a user i want to register with nopcommerce website",
  "id": "register-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2777568600,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "register-page;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 886338200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 42393800,
  "status": "passed"
});
formatter.after({
  "duration": 646887500,
  "status": "passed"
});
});