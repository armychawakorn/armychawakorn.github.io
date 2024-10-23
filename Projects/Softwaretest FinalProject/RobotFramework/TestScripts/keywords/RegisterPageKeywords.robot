*** Settings ***
Library         SeleniumLibrary
Resource        CommonKeywords.robot

*** Keywords ***
user register to RentalCar website with ${email} and ${password}
    CommonKeywords.Wait until element is ready then click element     xpath=//button[text()="สมัครสมาชิก"]
    CommonKeywords.Wait until element is ready then input text        id=email            ${email}
    CommonKeywords.Wait until element is ready then input text        id=password            ${password}
    CommonKeywords.Wait until element is ready then input text        id=confirmpassword            ${password}
    CommonKeywords.Wait until element is ready then click element     xpath=//button[contains(@class, "bg-[#5D66F6]") and text()="สมัครสมาชิก"]