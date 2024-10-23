*** Settings ***
Library         SeleniumLibrary
Resource        ../keywords/HomePageKeywords.robot
Resource        ../keywords/RegisterPageKeywords.robot
Variables       ../resources/config/config.yaml
Variables       ../resources/testdata/testdata.yaml
Suite Setup        Open Browser    ${baseUrl}    chrome
Suite Teardown     Close Browser


*** Test Cases ***
As a user, I want to register with my credential
    When user register to RentalCar website with ${email} and ${valid_password}
    Then Wait until element is ready to read text    xpath=//div[@class='swal2-html-container']    สมัครสมาชิกสำเร็จ
