function checkVoucher() {
  const correctCode = "CREATIVE2025";  // the voucher code users must enter
  const userInput = document.getElementById("voucherInput").value.trim();
  const msg = document.getElementById("message");

  if (userInput === correctCode) {
    window.location.href = "index.html";
  } else {
    msg.textContent = "Invalid voucher code. Please try again.";
  }
}
