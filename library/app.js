// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let first_name = document.querySelector(".first_name").value;
  let last_name = document.querySelector(".last_name").value;
  let email = document.querySelector(".email").value;
  let education = document.querySelector(".education").value;
  let business= document.querySelector(".business").value;
  let medical= document.querySelector(".medical").value;
  let message = document.querySelector(".message").value;
  console.log(first_name, last_name, email,education,business,medical,message);

//   saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();

  sendEmail(first_name, last_name, email,education,business,medical,message);
}

function sendEmail(first_name, last_name, email,education,business,medical,message) {

    Email.send({
        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To : 'abdoulkowiyy2020@gmail.com',
        From : "controlza2021@gmail.com",
        Subject : `${first_name} ${last_name} sent you a message`,
        Body : `Name: ${first_name} ${last_name} <br/> Email: ${Email} <br/> I'm interested in ${education} <br/> Message: ${Message}`
    }).then(
      message => alert("Mail sent Successfully")
    );
    
}