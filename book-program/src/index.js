import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css"

const Booklist = () => {
    return <section className='booklist'>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
    </section>
}
const author = "Joseph Nguyen";
const image = "https://m.media-amazon.com/images/I/715qi-cIbML._SL1500_.jpg";
const Book = (props) => {
    const title = "Don't Believe Everything You Think";
    return <article className='book'>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
    </article>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />)