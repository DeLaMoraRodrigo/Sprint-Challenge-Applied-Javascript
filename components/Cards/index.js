// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardCreator(data){
    //CARD
    const card = document.createElement("div");
    card.classList.add("card");
    document.querySelector(".cards-container").appendChild(card);

    //HEADLINE
    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = data.headline;
    card.appendChild(headline);

    //AUTHOR
    const author = document.createElement("div");
    author.classList.add("author");
    card.appendChild(author);

    //IMAGE CONTAINER
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    author.appendChild(imgContainer);

    //IMAGE
    const image = document.createElement("img");
    image.src = data.authorPhoto;
    imgContainer.appendChild(image);

    //NAME
    const name = document.createElement("span");
    name.textContent = `By ${data.authorName}`;
    author.appendChild(name);

    //RETURN CARD
    return card;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then( response => {
        // console.log(response);
        let objectArray = Object.entries(response.data.articles);
        // console.log(objectArray);

        objectArray.forEach( val => {
            val[1].forEach( item => {
                cardCreator(item);
            })
        })
    })
    .catch( error => {
        console.log(`This is an error`, error);
    })