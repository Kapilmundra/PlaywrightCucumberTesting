Feature: Ebay Advansed Search Scenarios

  @PA1
  Scenario: Ebay Logo on Advanced Search Page
    Given I am on Ebay Advanced Search page
    When I click on Ebay Logo
    Then I navigate to Home Page

  @PA2
  Scenario: Searching on Advance Search
    Given I am on Ebay Advanced Search page
    When Fill the form with detail
      | item        | excludeKeywod | min | max |
      | "Iphone 11" | "Refernished" | 300 | 900 |
