// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //HEADER
    const header = document.createElement("div");
    header.classList.add("header");
    document.querySelector(".header-container").appendChild(header);

    //DATE
    const date = document.createElement("span");
    date.classList.add("date");
    date.textContent = "SMARCH 28, 2019";
    header.appendChild(date);

    //TITLE
    const title = document.createElement("h1");
    title.textContent = "Lambda Times";
    header.appendChild(title);

    //TEMPERATURE
    const temperature = document.createElement("span");
    temperature.classList.add("temp");
    temperature.textContent = "98°";
    header.appendChild(temperature);

    //RETURN HEADER
    return header;
}

Header();
