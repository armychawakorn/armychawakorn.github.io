*** Settings ***
Library         SeleniumLibrary
Resource        CommonKeywords.robot

*** Keywords ***
user login to RentalCar website with ${username} and ${password}
    CommonKeywords.Wait until element is ready then click element     xpath=//button[text()="เข้าสู่ระบบ"]
    CommonKeywords.Wait until element is ready then input text        id=email            ${username}
    CommonKeywords.Wait until element is ready then input text        id=password         ${password}
    CommonKeywords.Wait until element is ready then click element     xpath=//button[contains(@class, "bg-[#5D66F6]") and text()="เข้าสู่ระบบ"]

RentalCar website should display display validate login fail message as "${expected_message}"
    CommonKeywords.Wait until page contains element then verify text        ${expected_message}

