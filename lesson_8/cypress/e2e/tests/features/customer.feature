Feature: Dự án ngân hàng

    Scenario: Nạp rút tiền
    Given Truy cập trang login

    When Tôi chọn tài khoản "Hermoine Granger" ở selectbox "Your Name"
    Then Kiểm tra đã vô trang account
    When Tôi thực hiện gửi tiền
    Then Kiểm tra đã gửi tiền thành công chưa
    When Tôi thực hiện rút tiền
    Then Kiểm tra đã rút tiền thành công chưa