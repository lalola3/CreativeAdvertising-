

function updateTimer() {
    const targetDate = new Date("2025-12-25T00:00:00");
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) {
        document.getElementById('timer').textContent = "Voucher available now!";
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    const formattedSeconds = seconds.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedHours = hours.toString().padStart(2, '0');
    document.getElementById('timer').textContent =
      `${days}d ${formattedHours}h ${formattedMinutes}m ${formattedSeconds}s until redeemable`;
}
setInterval(updateTimer, 1000);
updateTimer();

// Voucher code required for redemption.  
// You can change this value to whatever code you wish to issue to your users.
const correctCode = "XMAS2025";

document.getElementById('redeemBtn').addEventListener('click', function() {
    const now = new Date();
    const targetDate = new Date("2025-12-25T00:00:00");
    const inputCode = document.getElementById('voucherCode').value.trim();
    // Before the target date, show the naughty‑list popup
    if (now < targetDate) {
        document.getElementById('popupOverlay').style.display = 'flex';
        return;
    }
    // After or on the target date, check the voucher code
    if (inputCode === "") {
        alert("Please enter your voucher code.");
        return;
    }
    if (inputCode === correctCode) {
        alert("Voucher redeemed! Merry Christmas!");
    } else {
        alert("Invalid voucher code. Please check your code and try again.");
    }
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popupOverlay').style.display = 'none';
});
