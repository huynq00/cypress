Feature: Mingo
    Scenario: Chức năng select2
    Given I open sample page
    When I open the Select2 dropdown
    When I search and select "Option 2"

    Scenario: Select a date and time from the datetime picker 
    Given I open sample page
    When I open the datetime picker
    And I select the date "2024-06-14 10:20 AM"
    # Then the selected date should be "2024-06-14 10:20"