import React from 'react';
import ReactDOM from 'react-dom';

const Booklist = () =>{
    return <section>
        <Book></Book>
    </section>
}

const Book = () => {
    return <article>
    <Image></Image>
    <Title></Title>
    <Author></Author>
</article>
}

const Image = () => <h2>Image placeholder</h2>
const Title = () => <h2>Book Title</h2>
const Author = () => <h2>Author</h2>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />)