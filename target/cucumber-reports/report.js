$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/smartbear.feature");
formatter.feature({
  "name": "SmartBear Functions Validation",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate invalid login attempt",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"abcd\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSteps.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"abcd1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_enters_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Invalid Login or Password.\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSteps.user_should_see_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate valid login attempt",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSteps.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_enters_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be routed to \"http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSteps.user_should_be_routed_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate \"Web Orders\" menu items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSteps.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_enters_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be routed to \"http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSteps.user_should_be_routed_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate below menu items are displayed",
  "rows": [
    {
      "cells": [
        "View all orders",
        "View all products",
        "Order"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.validate_below_menu_items_are_displayed(DataTable)"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 0, Size: 0\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:659)\n\tat java.util.ArrayList.get(ArrayList.java:435)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:39)\n\tat com.sun.proxy.$Proxy17.get(Unknown Source)\n\tat steps.SmartBearSteps.validate_below_menu_items_are_displayed(SmartBearSteps.java:67)\n\tat ✽.validate below menu items are displayed(src/test/resources/features/smartbear.feature:26)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate \"Check All\" and \"Uncheck All\" links",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSteps.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_enters_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be routed to \"http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSteps.user_should_be_routed_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Check All\" button",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSteps.user_clicks_on_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all rows should be checked",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSteps.all_rows_should_be_checked()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Uncheck All\" button",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSteps.user_clicks_on_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all rows should be unchecked",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSteps.all_rows_should_be_unchecked()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate adding new order",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \"Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSteps.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_enters_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be routed to \"http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSteps.user_should_be_routed_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Order\" menu item",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSteps.user_clicks_Order_on_menu_item(String)"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 2, Size: 0\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:659)\n\tat java.util.ArrayList.get(ArrayList.java:435)\n\tat sun.reflect.GeneratedMethodAccessor2.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:39)\n\tat com.sun.proxy.$Proxy17.get(Unknown Source)\n\tat steps.SmartBearSteps.user_clicks_Order_on_menu_item(SmartBearSteps.java:109)\n\tat ✽.user clicks on \"Order\" menu item(src/test/resources/features/smartbear.feature:47)\n",
  "status": "failed"
});
formatter.step({
  "name": "user selects \"FamilyAlbum\" as product",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_selects_as_product(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"2\" as quantity",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_enters_as_quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters all address information",
  "rows": [
    {
      "cells": [
        "John Doe",
        "2860 S Des Plaines River Rd",
        "Des Plaines",
        "IL",
        "60016"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_enters_all_address_information(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters all payment information",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_enters_all_payment_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Process\" button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_clicks_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"View all orders\" menu item",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSteps.user_clicks_Order_on_menu_item(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see their order displayed in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSteps.user_should_see_their_order_displayed_in_the_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate all information entered displayed correct with the order",
  "rows": [
    {
      "cells": [
        "",
        "John Doe",
        "FamilyAlbum",
        "2",
        "02/28/2023",
        "2860 S Des Plaines River Rd",
        "Des Plaines",
        "IL",
        "60016",
        "Visa",
        "123456789012345",
        "01/35"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.validate_all_information_entered_displayed_correct_with_the_order(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate \"Delete Selected\" button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \"Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSteps.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_enters_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be routed to \"http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSteps.user_should_be_routed_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Check All\" button",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSteps.user_clicks_on_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Delete Selected\" button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.user_clicks_on_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate all orders are deleted from the List of All Orders",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSteps.validate_all_orders_are_deleted_from_the()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate user sees \"List of orders is empty. In order to add new order use this link.\" message",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.validate_user_sees_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});