let companyName = document.getElementById('comp-name');
    let natureOfBusiness = document.getElementById('business');
    let countryOfRegistration = document.getElementById('register');
    let addRess = document.getElementById('address');
    let postCode = document.getElementById('postcode');
    let userName = document.getElementById('name');
    let userPhone = document.getElementById('phone');
    let userMail = document.getElementById('email');

    const xBut = document.getElementById('xBut');
    const modBut = document.getElementById('modBut');

    let modalMessage = 'We would soon inform you about you request! Your company name: '
     + companyName + ';' + 'your nature of business: ' + natureOfBusiness + ';'
     'country of registration: ' + countryOfRegistration + ';' + 'address: ' + addRess + 
     'postcode: ' + postCode + ';' + 'contact name: ' + userName + ';' + 'contact phone: ' + userPhone + ';' + 'email: ' + userMail + '.'
     


function showModal(){
    if (modal-box.style.display === 'none'){
        modal-box.style.display = 'block';
    } else {
        modal-box.style.display = 'none';
        return modalMessage;
    }
}

    

    modBut.onclick = function showModal();

    






    xBut.onclick = function showModal();