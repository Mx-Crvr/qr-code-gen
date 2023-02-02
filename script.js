"use strict"

const btn = document.getElementById('btn');
const qr = document.getElementById('qrcode');

const onClick = () => {

    clearUI();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if (url === '') {
        alert('Please enter a URL')
    } else {
        showSpinner();

        setTimeout(() => {
            hideSpinner();
            generateQR(url, size);

            setTimeout(() => { 
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
            }, 50);
        }, 1000)
    }
}


const generateQR = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
    });
};


const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}
const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}

const clearUI = () => {
    qr.innerText = '';
    const saveBtn = document.getElementById('save');
    if (saveBtn) {
        saveBtn.remove();
    }
}

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save';
    link.classList = 'save-btn';
    link.href = saveUrl;
    link.download = qrcode;
    link.innerText = 'Save image';
    document.getElementById('generated').appendChild(link);
};

hideSpinner();


btn.addEventListener('click', onClick);
