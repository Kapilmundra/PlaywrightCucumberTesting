Feature: Ebay Home Page Scenarios

  @P1 @setCookies @cleanup
  Scenario: Advance search link
    Given I am on Ebay Home page
    When I click on Advance link
    Then I navigate to Advanced Search Page

  @PH2
  Scenario: Validate search count
    Given I am on Ebay Home page
    When Search for "Iphone 11"
    Then Result count more than 1000

  @PH3
  Scenario Outline: Home page links
    Given I am on Ebay Home page
    When I click on '<link>'
    Then I validate that page navigates to '<urls>' and title contains '<title>'

    Examples: 
      | link    | urls                                                          | title      |
      | Motors  | https://www.ebay.com/b/Auto-Parts-Accessories/6028/bn_569479 | Auto Parts |
      | Fashion | https://www.ebay.com/b/Fashion/bn_7000259856                 | Fashion    |
      | Sports  | https://www.ebay.com/b/Sporting-Goods/888/bn_1865031         | Sportings   |
