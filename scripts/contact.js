// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const formElement = document.querySelector('main');

formElement.onsubmit = function(e) {
    e.preventDefault();
    formElement.style.fontSize = '24px';
    formElement.style.marginLeft = '60px';
    formElement.innerHTML = '<p>Thank you for your message!<p>';
};

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

