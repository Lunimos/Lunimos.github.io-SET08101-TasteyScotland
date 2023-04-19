var name1 = document.getElementById("faq-name");
var number = document.getElementById("faq-number");
var email = document.getElementById("faq-email");
var heading = document.getElementById("faq-heading");
var message = document.getElementById("faq-message");
const submit = document.getElementsByClassName("left-box")[0];

submit.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("clicked");

  if (name1.value.length < 4) {
    alert("Please enter a name longer than 3 characters.");
    return false;
  }

  if (number.value.length < 10) {
    alert("Please enter a valid phone number.");
    return false;
  }

  if (!email.value.includes("@") || !email.value.includes(".")) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (heading.value == "") {
    alert("Please enter a heading for your message.");
    return false;
  }

  if (message.value == "") {
    alert("Please enter a message.");
    return false;
  }

  Email.send({
    SecureToken: "9f7b0867-a848-4c81-9404-4ef04581f57b",
    To: 'tasteyscotland1@gmail.com',
    From: "tasteyscotland1@gmail.com",
    Subject: heading.value,
    Body: "Name: " + name1.value +
      "<br> Email: " + email.value +
      "<br> Phone Number: " + number.value +
      "<br> Message: " + message.value
  }).then(
    message => alert("Message Sent Successfully")
  );
});