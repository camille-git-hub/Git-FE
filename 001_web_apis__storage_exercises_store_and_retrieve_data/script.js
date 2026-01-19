/* const input = document.getElementById('userInput');
const errorP = document.createElement('p')
const form = document.querySelector("form");
const quotesArray = JSON.parse(localStorage.getItem("quotes")) || [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.getElementById('userInput');
    if (input.value.trim() === "") {
        errorP.textContent = "Please enter a quote";
        errorP.classList.add("text-red-500");
        form.appendChild(errorP);
        return;
    }

    const quoteList = document.querySelector("ul");
    const quote = document.createElement("li");
    quote.innerText = input.value.trim();
    quoteList.insertBefore(quote, quoteList.firstChild);

    
    quotesArray.unshift(input.value.trim());
    localStorage.setItem("quotes", JSON.stringify(quotesArray));

    form.reset()
}); */

//Correction:

const form = document.querySelector("form");
const quoteList = document.querySelector("ul");
const reloadBtn = document.querySelector('#reload');

const createLiItem = (quote) => {
    const li = document.createElement("li");
    li.textContent = quote;
    return li;
    
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = document.getElementById('userInput').value.trim();
    
    if(!userInput) return alert("Please enter something");

    const quotes = JSON.parse(localStorage.getItem("quotes")) || [];

    quotes.unshift(userInput);
    localStorage.setItem("quotes", JSON.stringify(quotes));
    
    const newLi = createLiItem(userInput);
    quoteList.insertBefore(newLi, quoteList.firstElementChild);

    form.reset();
})

window.addEventListener("load", () => {
    const quotes = JSON.parse(localStorage.getItem("quotes")) || [];

    quotes.forEach(quote => {
        const newLi = createLiItem(quote);
        quoteList.appendChild(newLi);
        
    });
})

reloadBtn.addEventListener("click", () => {
    window.location.reload();
})