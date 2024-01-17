import React from 'react';
import ReactDOM from 'react-dom';

    import "./index.css"

const firstBook = {
    author: "Joseph Nguyen",
    image: "https://m.media-amazon.com/images/I/715qi-cIbML._SL1500_.jpg",
    title: "Don't Believe Everything You Think",
};
const secondBook = {
    author: "Manny Coats",
    image: "https://m.media-amazon.com/images/I/816rLNaN3QL._SL1500_.jpg",
    title: "Selling on Amazon - Amazon Seller Secrets Revealed Volume 1",
};

const Booklist = () => {
    return <section className='booklist'>
        <Book author={firstBook.author} title={firstBook.title} image={firstBook.image}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui libero, viverra ut est nec, aliquam congue ipsum. Vestibulum semper erat vel risus aliquet, a vestibulum nisl rhoncus. Donec commodo tortor et quam pellentesque lobortis. Sed a feugiat dolor. Aliquam erat volutpat. Phasellus venenatis eu ligula ac dignissim.</p><button>Click me</button></Book>
        <Book author={secondBook.author} title={secondBook.title} image={secondBook.image}></Book>
    </section>
}

const Book = ({ image, author, title, children }) => {
    return <article className='book'>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        {/* {children} */}
    </article>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />)