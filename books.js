
 let books;
 
 async function renderBooks(filter) {
    const booksWrapper = document.querySelector('.books');
    

    booksWrapper.classList += ' books__loading'

    if(!books) {
        books = await getBooks();
    }

    
     books =  await getBooks();
    booksWrapper.classList.remove('books__loading')
console.log(books)


    if (filter === 'LOW_TO_HIGH') {

         books.sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)) 
         
}

else if (filter === 'HIGH_TO_LOW') {
    books.sort((a, b) => (b. salePrice || b.originalPrice) - (a.salePrice || a.originalPrice))

}

else if (filter === 'RATING') {
    books.sort((a, b) => b.rating - a.rating) 

}

 let ratingHTML = "";
 let rating = 2.5;

 for (let i = 0;  i < Math.floor(rating); ++i) {
 ratingHTML += '<i class="fas fa-star"></i>\n'
 }

 if (!Number.isInteger(rating)) {
 ratingHTML += '<i class="fas fa-star-half-alt"></i>\n';
 }


const booksHtml = books.
map((book) => {
    return `<div class="book">
    <figure class="book__img--wrapper">
        <img class="book__img" src="${book.url}" alt="">
    </figure>
    <div class="book__title">
    ${book.title}
    </div>
    <div class="book__ratings">
        ${ratingsHTML(book.rating)} 
    </div>
    <div class="book__price">
    ${priceHTML(book.originalPrice, book.salePrice)}

  </div>
    </div>`
}
)
    .join("");


    booksWrapper.innerHTML = booksHtml;
}

function priceHTML(originalPrice, salePrice) {
    if (!salePrice) {
        return `£${originalPrice}`
    }
        return `<span class="book__price--normal">£${originalPrice}</span>£${salePrice}`
    
    }



function ratingsHTML (rating) {
    let ratingHTML = "";

    for (let i = 0;  i < Math.floor(rating); ++i) {
    ratingHTML += '<i class="fas fa-star"></i>\n'
    }
   
    if (!Number.isInteger(rating)) {
    ratingHTML += '<i class="fas fa-star-half-alt"></i>\n';
    }
    return ratingHTML;
}

function filterBooks(event) {
    renderBooks(event.target.value);
}



setTimeout(() => {
renderBooks();
});

function getBooks() {
   return new Promise((resolve) => {
 setTimeout(() => {
 resolve([
    {
    id: 1,
    title: "Atomic Habits",
    url: "assets/atomic habits.jpg",
    originalPrice:  23.99,
    salePrice: 17.99,
    rating: 4.5,

},

{
    id: 2,
    title: "Crack the coding interview",
    url: "assets/crack the coding interview.png",
    originalPrice:  29.99,
    salePrice: 14.99,
    rating: 4,

},
{
    id: 3,
    title: "Deep Work",
    url: "assets/deep work.jpeg",
    originalPrice:  22.99,
    salePrice: 15.99,
    rating: 4,

},
{
    id: 4,
    title: "Can't Hurt Me",
    url: "assets/david goggins.jpeg",
    originalPrice:  21.99,
    salePrice: 18.99,
    rating: 1,

},
{
    id: 5,
    title: "Rich Dad Poor Dad",
    url: "assets/book-3.jpeg",
    originalPrice:  8.99,
    salePrice: 5.99,
    rating: 4.5,

},
{
    id: 6,
    title: "48 Laws of Power",
    url: "assets/book-5.jpeg",
    originalPrice:  13.99,
    salePrice: 11.99,
    rating: 4.5,

},
{
    id: 7,
    title: "Cashflow Quadrant",
    url: "assets/book-4.jpeg",
    originalPrice:  19.99,
    salePrice: 12.99,
    rating: 4.5,

},
{
    id: 8,
    title: "The 10 X rule",
    url: "assets/book-1.jpeg",
    originalPrice:  14.99,
    salePrice: 12.99,
    rating: 4.5,

},
{
    id: 9,
    title: "The 5 Second Rule",
    url: "assets/book-6.jpeg",
    originalPrice:  13.99,
    salePrice: 11.99,
    rating: 4.5,

},
{
    id: 10,
    title: "Your Next Five Moves",
    url: "assets/book-7.jpg",
    originalPrice:  13.99,
    salePrice: 11.99,
    rating: 4.5,

},
{
    id: 11,
    title: "Be Obsessed",
    url: "assets/book-2.jpeg",
    originalPrice:  18.99,
    salePrice: 12.99,
    rating: 4.5,

},
{
    id: 12,
    title: "Mastery",
    url: "assets/book-8.jpeg",
    originalPrice:  20.99,
    salePrice: 16.99,
    rating: 4.5,
 
 },
 ]);
    }, 1000);
    });
}