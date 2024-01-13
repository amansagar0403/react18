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

const Book = () => {
    return <article className='book'>
        <Image></Image>
        <Title></Title>
        <Author></Author>
    </article>
}

const Image = () => <img src='https://m.media-amazon.com/images/I/715qi-cIbML._SL1500_.jpg' alt='The Everything Store: Jeff Bezos and the Age of Amazon' />
const Title = () => <h2>Don't Believe Everything You Think</h2>
const Author = () => <h2>Joseph Nguyen</h2>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />)