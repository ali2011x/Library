const addBookButton = document.querySelector('.addBook');
let books = [];

function toggleForm () {

    let form = document.querySelector('.form')

    if (!form) {
    form = document.createElement('div');
    form.classList.add('form');
    document.body.appendChild(form);

    const heading = document.createElement('h2');
    heading.textContent = 'Book Form';
    heading.classList.add('header');
    form.appendChild(heading);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title')
    form.appendChild(titleContainer)


    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    titleLabel.classList.add('titleLabel');
    titleContainer.appendChild(titleLabel)

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.classList.add('titleInput')
    titleContainer.appendChild(titleInput)


    const authorContainer = document.createElement('div');
    authorContainer.classList.add('author')
    form.appendChild(authorContainer);


    const authorLabel = document.createElement('label');
    authorLabel.textContent = 'Author:';
    authorLabel.classList.add('authorLabel');
    authorContainer.appendChild(authorLabel)

    const authorInput = document.createElement('input');
    authorInput.setAttribute('type', 'text');
    authorInput.classList.add('authorInput');
    authorContainer.appendChild(authorInput)


    const pagesContainer = document.createElement('div');
    pagesContainer.classList.add('pages')
    form.appendChild(pagesContainer);

    const pagesLabel = document.createElement('label');
    pagesLabel.textContent = 'Pages:';
    pagesLabel.classList.add('pagesLabel');
    pagesContainer.appendChild(pagesLabel)

    const pagesInput = document.createElement('input');
    pagesInput.setAttribute('type', 'text');
    pagesInput.classList.add('pagesInput');
    pagesContainer.appendChild(pagesInput)

    const readContainer = document.createElement('div');
    readContainer.classList.add('read')
    form.appendChild(readContainer);

    const readLabel = document.createElement('p');
    readLabel.textContent = 'Have you read this book?';
    readLabel.classList.add('readLabel')
    readContainer.appendChild(readLabel)


    const yes = document.createElement('div')
    readContainer.appendChild(yes)

    const yesOption = document.createElement('input');
    yesOption.setAttribute('type', 'radio');
    yesOption.setAttribute('value', 'Yes');
    yesOption.setAttribute('name', 'read')
    yesOption.classList.add('yesOption');
    yes.appendChild(yesOption);

    const yesLabel = document.createElement('label');
    yesLabel.textContent = 'Yes';
    yesLabel.classList.add('yesLabel');
    yes.appendChild(yesLabel);

    
    const no = document.createElement('div')
    readContainer.appendChild(no)


    const noOption = document.createElement('input');
    noOption.setAttribute('type', 'radio');
    noOption.setAttribute('value', 'No');
    noOption.setAttribute('name', 'read')
    noOption.classList.add('noOption');
    no.appendChild(noOption);

    const noLabel = document.createElement('label');
    noLabel.textContent = 'No';
    noLabel.classList.add('noLabel');
    no.appendChild(noLabel);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.setAttribute('type', 'button');
    submitButton.addEventListener('click', () => {

        const title = titleInput.value;
        const author = authorInput.value;
        let pages = pagesInput.value;
        if (isNaN(pages) || pages.trim() === '') {
            alert("Please enter a valid Number")
            return;
        }
        const read = document.querySelector('input[name="read"]:checked')?.value
        const book = {title, author, pages, read};
        books.push(book);
        generateCard(book)
        form.remove();
    });
    form.appendChild(submitButton);

} else {
    form.remove();
}
}
function generateCard (book) {
    const cardContainer = document.querySelector('.card-container') || createCardContainer();
    const card = document.createElement('div');
    card.classList.add('card')
    
    const titleDetail = document.createElement('p');
    titleDetail.textContent = `Title: ${book.title}`;
    card.appendChild(titleDetail);

    const authorDetail = document.createElement('p');
    authorDetail.textContent = `Author: ${book.author}`;
    card.appendChild(authorDetail);

    const pagesDetail = document.createElement('p');
    pagesDetail.textContent = `Page: ${book.pages}`;
    card.appendChild(pagesDetail);

    const readDetail = document.createElement('p');
    readDetail.textContent = `Read: ${book.read}`;
    card.appendChild(readDetail);

    const changeButton = document.createElement('button');
    changeButton.textContent = 'Change Read Status';
    changeButton.addEventListener('click', () => {
    if (readDetail.textContent === 'Read: Yes') {
        readDetail.textContent = 'Read: No'
    } else {
        readDetail.textContent = 'Read: Yes';
    }
    })
    card.appendChild(changeButton)

    const deleteCard = document.createElement('button')
    deleteCard.textContent = 'X';
    deleteCard.classList.add('delete');
    deleteCard.addEventListener('click', () => {
        card.remove();
    })
    card.appendChild(deleteCard)

    cardContainer.appendChild(card)
}
function createCardContainer() {
    const container = document.createElement('div');
    container.classList.add('card-container');
    document.body.appendChild(container);
    return container;
}









addBookButton.addEventListener('click', () => toggleForm())
