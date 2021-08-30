// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let first_name = document.querySelector(".first_name").value;
  let last_name = document.querySelector(".last_name").value;
  let email = document.querySelector(".email").value;
  let education = document.querySelector(".education").value;
  let business = document.querySelector(".business").value;
  let medical = document.querySelector(".medical").value;
  let country_code = document.querySelector(".country_code").value;
  let phone_number = document.querySelector(".phone_number").value;
  let message = document.querySelector(".message").value;
  console.log(
    first_name,
    last_name,
    email,
    education,
    business,
    medical,
    country_code,
    phone_number,
    message
  );

  //   saveContactInfo(name, email, message);

  //   document.querySelector(".contact-form").reset();

  sendEmail(
    first_name,
    last_name,
    email,
    education,
    business,
    medical,
    country_code,
    phone_number,
    message
  );
}

function sendEmail(
  first_name,
  last_name,
  email,
  education,
  business,
  medical,
  country_code,
  phone_number,
  message
) {
  Email.send({

    Host : "smtp.gmail.com",
    Username : "controlza2021@gmail.com",
    Password : "ezwzakrcquzwobhr",
    // SecureToken : "3def6893-8292-4b1b-9594-1b5226b8d044",
    To: "controlza2021@gmail.com",
    From: "controlza2021@gmail.com",
    Subject: `${first_name} ${last_name} sent you a message`,
    Body: `Name: ${first_name} ${last_name} <br/>
         Email: ${Email} <br/> 
         I'm interested in ${education} <br/> 
         I'm interested in ${business} <br/>
         I'm interested in ${medical} <br/>
         Country Code: ${country_code} <br/> 
         Phone Number : ${phone_number} <br/>
         Message: ${message}`,
  }).then((message) => alert("Mail sent Successfully"));
}
