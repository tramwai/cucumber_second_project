package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.junit.Assert;
import org.openqa.selenium.NotFoundException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import pages.SmartBearLoginPage;
import pages.SmartBearOrdersPage;
import utils.Driver;
import utils.DropdownHandler;
import utils.TableHandler;

import java.util.List;

public class SmartBearSteps {

    WebDriver driver;
    SmartBearLoginPage smartBearLoginPage;
    SmartBearOrdersPage smartBearOrdersPage;
    List<WebElement> tableRow;

    @Before
    public void setup(){
        driver = Driver.getDriver();
        smartBearLoginPage = new SmartBearLoginPage();
        smartBearOrdersPage = new SmartBearOrdersPage();
    }

    @Given("user is on {string}")
    public void user_is_on(String url) {
        driver.get(url);
    }

    @When("user enters username as {string}")
    public void user_enters_username_as(String username) {
        smartBearLoginPage.usernameInputBox.sendKeys(username);
    }

    @When("user enters password as {string}")
    public void user_enters_password_as(String password) {
        smartBearLoginPage.passwordInputBox.sendKeys(password);
    }

    @When("user clicks on Login button")
    public void user_clicks_on_Login_button() {
        smartBearLoginPage.loginButton.click();
    }

    @Then("user should see {string} message")
    public void user_should_see_message(String message) {
        Assert.assertEquals(message, smartBearLoginPage.errorMessage.getText());
    }

    @Then("user should be routed to {string}")
    public void user_should_be_routed_to(String url) {
        Assert.assertEquals(url, driver.getCurrentUrl());
    }

    @Then("validate below menu items are displayed")
    public void validate_below_menu_items_are_displayed(DataTable dataTable) {
        List<String> expectedOrderMenuItems = dataTable.asList();
        for (int i = 0; i < expectedOrderMenuItems.size(); i++) {
            Assert.assertEquals(expectedOrderMenuItems.get(i), smartBearOrdersPage.ordersMenuItems.get(i).getText());
        }
    }

    @When("user clicks on {string} button")
    public void user_clicks_on_button(String button) {
        switch(button){
            case "Check All":
                smartBearOrdersPage.checkAllButton.click();
                break;
            case "Uncheck All":
                smartBearOrdersPage.uncheckAllButton.click();
                break;
            case "Process":
                smartBearOrdersPage.processButton.click();
                break;
            case "Delete Selected":
                smartBearOrdersPage.deleteAll.click();
                break;
            default:
                throw new NotFoundException("This button is not defined properly");
        }
    }

    @Then("all rows should be checked")
    public void all_rows_should_be_checked() {
        for (int i = 0; i < smartBearOrdersPage.checkBoxes.size(); i++) {
            Assert.assertTrue(smartBearOrdersPage.checkBoxes.get(i).isSelected());
        }
    }

    @Then("all rows should be unchecked")
    public void all_rows_should_be_unchecked() {
        for (int i = 0; i < smartBearOrdersPage.checkBoxes.size(); i++) {
            Assert.assertFalse(smartBearOrdersPage.checkBoxes.get(i).isSelected());
        }
    }

    @When("user clicks on {string} menu item")
    public void user_clicks_Order_on_menu_item(String option) {
        switch(option){
            case "Order":
                smartBearOrdersPage.ordersMenuItems.get(2).click();
                break;
            case "View all orders":
                smartBearOrdersPage.ordersMenuItems.get(0).click();
                break;
            default:
                throw new NotFoundException("This menu option is not properly defined");
        }
    }

    @When("user selects {string} as product")
    public void user_selects_as_product(String product) {
        DropdownHandler.selectByVisibleText(smartBearOrdersPage.productDropdown, product);
    }

    @When("user enters {string} as quantity")
    public void user_enters_as_quantity() {
        smartBearOrdersPage.quantityInputBox.sendKeys("2");
    }

    @When("user enters all address information")
    public void user_enters_all_address_information(DataTable addressInfo) {
        for (int i = 0; i < addressInfo.asList().size(); i++) {
            smartBearOrdersPage.addressInfoInputBoxes.get(i).sendKeys(addressInfo.asList().get(i));
        }

    }

    @When("user enters all payment information")
    public void user_enters_all_payment_information() {

            smartBearOrdersPage.visa.click();
            smartBearOrdersPage.cardNumberInputBox.sendKeys("123456789012345");
            smartBearOrdersPage.cardExpiryDateInputBox.sendKeys("01/35");

    }

    @Then("user should see their order displayed in the table")
    public void user_should_see_their_order_displayed_in_the_table() {
        tableRow = TableHandler.getTableRow(driver, 2);
        for (int i = 0; i < tableRow.size()-1; i++) {
            Assert.assertTrue(tableRow.get(i).isDisplayed());
        }
    }

    @Then("validate all information entered displayed correct with the order")
    public void validate_all_information_entered_displayed_correct_with_the_order(DataTable orderInfo) {
        tableRow = TableHandler.getTableRow(driver, 2);
        for (int i = 0; i < tableRow.size()-1; i++) {
            Assert.assertEquals(orderInfo.asList().get(i), tableRow.get(i).getText());
        }
    }
    @Then("validate all orders are deleted from the List of All Orders")
    public void validate_all_orders_are_deleted_from_the() {
        tableRow = TableHandler.getTableRow(driver, 2);
        for (int i = 0; i < tableRow.size()-1; i++) {
            Assert.assertFalse(tableRow.get(i).isDisplayed());
        }
    }
    @Then("validate user sees {string} message")
    public void validate_user_sees_message(String message) {
        Assert.assertEquals(message, smartBearOrdersPage.orderMessage.getText());
    }


}
