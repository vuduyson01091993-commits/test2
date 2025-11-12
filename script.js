// Google Apps Script Web App URL (sẽ tạo ở bước sau)
const scriptURL = "YOUR_GOOGLE_APPS_SCRIPT_WEBAPP_URL";

// Gửi yêu cầu mượn
document.getElementById("borrowForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    device: document.getElementById("device").value,
    borrowDate: document.getElementById("borrowDate").value,
    borrowTime: document.getElementById("borrowTime").value,
    returnDate: document.getElementById("returnDate").value,
    returnTime: document.getElementById("returnTime").value
  };

  fetch(https://script.google.com/macros/s/AKfycbw5gfo7zGUe4E8NhKgVZlWRrKasKGlVn4z1AAwyckfjEvfUq8XdVLI0G1L8R0XEJN3K/exec, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(() => {
    document.getElementById("statusMsg").innerText = "✅ Đã gửi yêu cầu! Quản lý sẽ duyệt sớm.";
    document.getElementById("borrowForm").reset();
  })
  .catch(err => alert("Lỗi gửi yêu cầu: " + err));
});

// Quản trị viên đăng nhập
function loginAdmin() {
  const pass = document.getElementById("adminPass").value;
  if (pass === "FICD2025") {
    window.open("https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit", "_blank");
  } else {
    alert("Sai mật khẩu!");
  }
}
