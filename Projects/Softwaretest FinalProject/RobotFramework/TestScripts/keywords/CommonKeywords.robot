*** Settings ***
Library    SeleniumLibrary

*** Keywords ***
Wait until element is ready then click element
    [Arguments]    ${locator}
    Wait Until Keyword Succeeds    5x    2s    Click Element    ${locator}

Wait until element is ready then input text
    [Arguments]    ${locator}    ${text}
    Wait Until Keyword Succeeds    5x    2s    Input Text    ${locator}    ${text}

Wait until page contains element then verify text
    [Arguments]    ${expected_text}
    Wait Until Keyword Succeeds    5x    2s    Page Should Contain         ${expected_text}

Wait until element is ready to read text
    [Arguments]    ${locator}    ${expected_text}    ${timeout}=10s    ${retry_interval}=0.5s 
    Wait Until Element Is Visible    ${locator}    timeout=${timeout}
    Wait Until Element Contains    ${locator}    ${expected_text}    timeout=${timeout}    error=Expected text "${expected_text}" not found in element "${locator}" after ${timeout}