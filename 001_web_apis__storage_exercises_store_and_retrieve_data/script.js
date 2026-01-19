const input = document.getElementById('userInput');
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
});


