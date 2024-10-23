*** Settings ***
Library         SeleniumLibrary
Resource        ../keywords/LoginPageKeywords.robot
Resource        ../keywords/HomePageKeywords.robot
Variables       ../resources/config/config.yaml
Variables       ../resources/testdata/testdata.yaml
Suite Setup        Open Browser    ${baseUrl}    chrome
Suite Teardown     Close Browser


*** Test Cases ***
As a user, I want to login success with valid credential
    When user login to RentalCar website with ${email} and ${valid_password}
    Then RentalCar website should display home page and display message as "ยินดีต้อนรับสู่บริการเช่ารถยนต์ของเรา"
    [Teardown]    user logout from RentalCar website

As a user, I fail to login with invalid credential
    When user login to RentalCar website with ${email} and ${invalid_password}
    Then RentalCar website should display display validate login fail message as "เข้าสู่ระบบไม่สำเร็จ โปรดตรวจสอบอีเมลหรือรหัสผ่านของคุณ"