import React from "react"
import ReactDOM from "react-dom/client";

const parent = React.createElement('div', { id: 'parent'}, [
        React.createElement('div', { id: 'child'},[
            React.createElement('h1', { id: 'childh1' }, "I'm an h1 tag 🚀😎"),
            React.createElement('h2', { id: 'childh2' }, "I'm an h2 tag")
        ]),
        React.createElement('div', { id: 'child2'},[
            React.createElement('h1', { id: 'child2h1' }, "I'm an h1 tag"),
            React.createElement('h2', { id: 'child2h2' }, "I'm an h2 tag")
        ])
    ]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);