function generateCaptcha() {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$^&*_";
  let captchaLength = 7;
  let captcha = "";
  for (let i = 0; i < captchaLength; i++) {
    let randomChar = Math.floor(Math.random() * chars.length);
    captcha += chars.substring(randomChar, randomChar + 1);
  }
  return captcha;
}

function drawCaptcha(captcha) {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(captcha, canvas.width / 2, canvas.height / 2);
}

function refreshCaptcha() {
  let captcha = generateCaptcha();
  drawCaptcha(captcha);
  document.getElementById("captcha-input").value = "";
  return captcha;
}

window.onload = function () {
  let captcha = refreshCaptcha();

  document
    .getElementById("refresh-captcha")
    .addEventListener("click", function () {
      captcha = refreshCaptcha();
    });

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      let captchaInput = document.getElementById("captcha-input");
      if (captchaInput.value !== captcha) {
        event.preventDefault();
        alert("Invalid captcha. Please try again.");
        captcha = refreshCaptcha();
      }
    });
};
