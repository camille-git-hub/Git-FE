// You can work here or download the template
const form = document.getElementById('contact-form');
const outputP = document.getElementById('output');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputName = document.getElementById('name').value.trim();
    const inputEmail = document.getElementById('email').value.trim();
    const inputMessage = document.getElementById('message').value.trim();
    
    //Validation to check if all fields are filled
    if (!inputName || !inputEmail || !inputMessage) {
        outputP.textContent = "All fields are required"
        outputP.classList.remove("bg-green-500");
        outputP.classList.add("bg-red-500");
        return;      
    }

    //Output data
    const list = document.createElement('ul');
    const nameItem = document.createElement('li');
    nameItem.textContent = `Name: ${inputName}`;
    const emailItem = document.createElement('li');
    emailItem.textContent = `Email: ${inputEmail}`;
    const messageItem = document.createElement('li');
    messageItem.textContent = `Message: ${inputMessage}`;

    list.appendChild(nameItem);
    list.appendChild(emailItem);
    list.appendChild(messageItem);
    outputP.appendChild(list);

    outputP.classList.add("bg-green-500");
    outputP.classList.remove("bg-red-500");

    form.reset();
})


//e.preventDefault(); & form.reset(); are used to prevent the default form submission behavior and to clear the form fields after submission.
