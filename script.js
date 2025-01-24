let Qr = new QRCode(document.querySelector(".qrcode"));
Qr.makeCode("https://www.youtube.com/watch?v=xvFZjo5PgG0");

function MakeQr() {
    if (document.querySelector("input").value === "" || document.querySelector("input").value === " ") {
            alert("The qr code needs text!");
    } else {
        Qr.makeCode(document.querySelector("input").value);
    }
}