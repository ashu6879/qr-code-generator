function generateQRCode() {
    const url = document.getElementById('url-input').value.trim();
    const qrcodeCanvas = document.getElementById('qrcode');
    
    if (url) {
        QRCode.toCanvas(qrcodeCanvas, url, { errorCorrectionLevel: 'H' }, function (error) {
            if (error) {
                console.error(error);
                alert('Error generating QR code: ' + error.message);
            } else {
                console.log('QR Code generated!');
            }
        });
    } else {
        alert('Please enter a valid URL');
    }
}
