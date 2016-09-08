import React from 'react';
import './style/Article.css';

export default function About() {
    return(
        <div className="article-container">
            <h1>About</h1>
            <br/>
            <p>This is my blog where I will most probably write about hacking stuff and writing better code. I usually work in Android [Java8], JavaScript and Reactive [RxJava, RxAndroid, React].</p>
            <p>My passion lies in the Reactive paradigm and Android. Thus you'll find the best bits of RxJava and how it allows us to write the best apps, ever.</p>
            <h2>Site</h2>
            <p>I've developed this site as a frontend for my REST blog API. It's rather over-engineered. Soon you'll find a GitHub and schematic here for it.</p>
        </div>
    );
}