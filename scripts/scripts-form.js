function createSubMessage(){
    let companyName = document.getElementById('comp-name').value;
    let natureOfBusiness = document.getElementById('business').value;
    let dateOfRegistration = document.getElementById('register').value;
    let countryOfRegistration = document.getElementById('country').value;
    let addRess = document.getElementById('address').value;
    let postCode = document.getElementById('postcode').value;
    let userName = document.getElementById('name').value;
    let userPhone = document.getElementById('phone').value;
    let userMail = document.getElementById('email').value;

    let modalMessage = `We would soon inform you about you request!
Please, check your contact information:

    1. Your company name: ${companyName}.
    2. Your nature of business: ${natureOfBusiness}.
    3. Date of registration : ${dateOfRegistration}.
    4. Country of registration: ${countryOfRegistration}.
    5. Address: ${addRess}.
    6. Postcode: ${postCode}.
    7. Contact name: ${userName}.
    8. Contact phone: ${userPhone}.
    9. Email: ${userMail}.`   

    const messageBox = document.createElement('p');
    const parent = document.getElementsByClassName('modal-content')[0];
    const mesText = document.createTextNode(modalMessage);
    messageBox.appendChild(mesText);
    parent.appendChild(messageBox);
};


function showModal(){
    debugger;
    let modalBox = document.getElementById('modal');
    let displayForModalBox = getComputedStyle(modalBox).getPropertyValue("display");

    if (displayForModalBox === 'none'){
        modalBox.style.display = 'block';
        createSubMessage();
    } else {
        modalBox.style.display = 'none';        
    }
}   

    