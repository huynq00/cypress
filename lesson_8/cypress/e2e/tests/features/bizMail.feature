Feature: Thêm khách tại bizMail

  Scenario: Thêm khách hàng thủ công
    Given Truy cập trang login để vô bizMail
    When Tôi đăng nhập tài khoản vào trang web
    Then Kiểm tra đã vào trang web
    When Tôi chọn dự án bizMail của tôi
    When Tôi thêm khách hàng bằng phương pháp thủ công
    Then Kiểm tra đã thêm khách hàng vào danh sách khách hàng

  Scenario: Thêm khách hàng bằng cách import file
    Given Truy cập trang login để vô bizMail
    When Tôi đăng nhập tài khoản vào trang web
    Then Kiểm tra đã vào trang web
    When Tôi chọn dự án bizMail của tôi
    When Tôi thêm khách hàng bằng phương pháp import file
    Then Kiểm tra đã thêm khách hàng vào danh sách khách hàng với cách import file
