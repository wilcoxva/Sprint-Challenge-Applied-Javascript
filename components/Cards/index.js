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

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then((res) => {
        console.log(res);
        const arr = res.data.articles.javascript;
        for (i = 0; i < arr.length; i++) { 
            console.log(arr[i])
            const newCard = createArticle(arr[i].headline, arr[i].authorPhoto, arr[i].authorName);
            cardsContainer.appendChild(newCard);
          }
          const arr2 = res.data.articles.bootstrap;
        for (i = 0; i < arr2.length; i++) { 
            console.log(arr2[i])
            const newCard = createArticle(arr2[i].headline, arr2[i].authorPhoto, arr2[i].authorName);
            cardsContainer.appendChild(newCard);
          }
          const arr3 = res.data.articles.technology;
        for (i = 0; i < arr3.length; i++) { 
            console.log(arr3[i])
            const newCard = createArticle(arr3[i].headline, arr3[i].authorPhoto, arr3[i].authorName);
            cardsContainer.appendChild(newCard);
          }
          const arr4 = res.data.articles.jquery;
        for (i = 0; i < arr4.length; i++) { 
            console.log(arr4[i])
            const newCard = createArticle(arr4[i].headline, arr4[i].authorPhoto, arr4[i].authorName);
            cardsContainer.appendChild(newCard);
          }
          const arr5 = res.data.articles.node;
        for (i = 0; i < arr5.length; i++) { 
            console.log(arr5[i])
            const newCard = createArticle(arr5[i].headline, arr5[i].authorPhoto, arr5[i].authorName);
            cardsContainer.appendChild(newCard);
          }
    });

    const cardsContainer = document.querySelector('.cards-container');

    function createArticle(headline, authorPhoto, authorName) {
        const card = document.createElement('div');
        const headlineDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const imgContainer = document.createElement('div');
        const img = document.createElement('img');
        const nameSpan = document.createElement('span');

        card.appendChild(headlineDiv);
        card.appendChild(authorDiv);
        authorDiv.appendChild(imgContainer);
        authorDiv.appendChild(nameSpan);
        imgContainer.appendChild(img);

        card.classList.add('card');
        headlineDiv.classList.add('headline');
        headlineDiv.textContent = headline;
        authorDiv.classList.add('author');
        imgContainer.classList.add('img-container');
        img.src = authorPhoto;
        nameSpan.textContent = `By ${authorName}`

        return card;
    }