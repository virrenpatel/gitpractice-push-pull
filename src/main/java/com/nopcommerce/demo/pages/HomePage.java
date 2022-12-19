package com.nopcommerce.demo.pages;

import com.aventstack.extentreports.Status;
import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import java.util.List;


public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());
    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(linkText = "Log in")
    WebElement loginLink;

    @CacheLookup
    @FindBy(linkText = "Register")
    WebElement registerLink;

    @CacheLookup
    @FindBy(xpath = "//img[@alt='nopCommerce demo store']")
    WebElement logo;

    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-account']")
    WebElement myAccountLink;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Log out']")
    WebElement logOutLink;

    @CacheLookup
    @FindBy(xpath = "//div[@class='header-menu']/child::ul[1]/li/a")
    List<WebElement> topMenuList;


    public void clickOnLoginLink() {
        clickOnElement(loginLink);
        log.info("click On LoginLink " + loginLink.toString());
    }

    public boolean isLogInLinkDisplay() {
        boolean b = loginLink.isDisplayed();
        log.info("is LogIn Link Display " + loginLink.toString());
        return b;
    }

    public void clickOnRegisterLink() {
        clickOnElement(registerLink);
        log.info("click On RegisterLink " + registerLink.toString());
    }

    public void clickOnMyAccountLink() {
        clickOnElement(myAccountLink);
        log.info("click On MyAccountLink " + myAccountLink.toString());
    }

    public HomePage clickOnLogOutLink() {
        clickOnElement(logOutLink);
        log.info("click On LogOutLink " + logOutLink.toString());
        return new HomePage();
    }

    public boolean isLogOutLinkDisplay() {
        boolean b = logOutLink.isDisplayed();
        log.info("Is LogOutLink Display " + logOutLink.toString());
        return b;
    }

    public boolean isLogoDisplayed() {
        boolean b = logo.isDisplayed();
        log.info("is Logo Displayed " + logo.toString());
        return b;
    }

    public void clickOnMenuTab(String tab) {
        for (WebElement menu : topMenuList) {
            if (menu.getText().contains(tab)) {
                clickOnElement(menu);
                log.info("click On MenuTab " + menu.toString());
                break;
            }
        }
    }

}
