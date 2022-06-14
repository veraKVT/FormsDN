let companyName;
let natureOfBusiness;
let countryOfRegistration;
let addRess;
let postCode;
let userName;
let userPhone;
let userMail;


const xBut = document.getElementById('xBut');
const modBut = document.getElementById('modBut');

let modalMessage = `We would soon inform you about you request!
Please, check your contact information:

    1. Your company name: ${companyName}.
    2. Your nature of business: ${natureOfBusiness}.
    3. Country of registration: ${countryOfRegistration}.
    4. Address: ${addRess}.
    5. Postcode: ${postCode}.
    6. Contact name: ${userName}.
    7. Contact phone: ${userPhone}.
    8. Email: ${userMail}.`   


function showModal(){
    let companyName = document.getElementById('comp-name').value;
    let natureOfBusiness = document.getElementById('business').value;
    let countryOfRegistration = document.getElementById('register').value;
    let addRess = document.getElementById('address').value;
    let postCode = document.getElementById('postcode').value;
    let userName = document.getElementById('name').value;
    let userPhone = document.getElementById('phone').value;
    let userMail = document.getElementById('email').value;

    let modalBox = document.getElementById('modal-box');
    let displayForModalBox = getComputedStyle(modalBox).getPropertyValue("display");

    if (displayForModalBox === 'none'){
        displayForModalBox = 'block';
    } else {
        displayForModalBox = 'none';
        return modalMessage;
    }
}   

    modBut.onclick = function showModal(){

    };

    xBut.onclick = function showModal(){
        
    };