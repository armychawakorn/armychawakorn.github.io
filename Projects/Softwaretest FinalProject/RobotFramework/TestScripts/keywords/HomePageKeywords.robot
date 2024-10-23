*** Settings ***
Library         SeleniumLibrary
Resource        CommonKeywords.robot

*** Keywords ***
RentalCar website should display home page and display message as "${expected_message}"
    CommonKeywords.Wait until page contains element then verify text    ${expected_message}

user logout from RentalCar website
    CommonKeywords.Wait until element is ready then click element    xpath=//button[contains(@class, "bg-blue-500") and text() = "ออกจากระบบ"]