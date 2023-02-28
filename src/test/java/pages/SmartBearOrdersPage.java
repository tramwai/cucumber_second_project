package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

import java.util.List;

public class SmartBearOrdersPage {
    public SmartBearOrdersPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id = "ctl00_MainContent_btnCheckAll")
    public WebElement checkAllButton;

    @FindBy(id = "ctl00_MainContent_btnUncheckAll")
    public WebElement uncheckAllButton;

    @FindBy(css = "input[id^='ctl00_MainContent_orderGrid_ctl']")
    public List<WebElement> checkBoxes;

    @FindBy(css = "ctl00_menu a")
    public List<WebElement> ordersMenuItems;

    @FindBy(css = "select[id*='ddlProduct']")
    public WebElement productDropdown;

    @FindBy(id = "ctl00_MainContent_fmwOrder_txtQuantity")
    public WebElement quantityInputBox;

    @FindBy(xpath = "//ol[2]//input")
    public List<WebElement> addressInfoInputBoxes;

    @FindBy(id = "label[for^='ctl00_MainContent_fmwOrder_cardList_0']")
    public WebElement visa;

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox6")
    public WebElement cardNumberInputBox;

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox1")
    public WebElement cardExpiryDateInputBox;

    @FindBy(id = "ctl00_MainContent_fmwOrder_InsertButton")
    public WebElement processButton;

    @FindBy(id = "ctl00_MainContent_btnDelete")
    public WebElement deleteAll;

    @FindBy(id = "ctl00_MainContent_orderMessage")
    public WebElement orderMessage;

    @FindBy(id = "ctl00_MainContent_orderGrid")
    public WebElement table;
}
