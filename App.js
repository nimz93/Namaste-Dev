import React from "react";
import ReactDOM from "react-dom/client";

let ul = React.createElement('ul',{},
            React.createElement("li",{},'Item 1'),
            React.createElement("li",{},'Item 2')
        )
let elm = React.createElement('h1',{className : 'title'}, 'This is a Nested List',ul);
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elm);