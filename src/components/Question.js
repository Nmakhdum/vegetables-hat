import React from 'react';

const Question = () => {
    return (
        <div>
            <h1>How does react work?</h1>
            <p> React is one of the most popular javascript libraries for  mobile and web application development . One of the biggest advantages of using React  is that we can infuse HTML code with javascript.We can create a representation of a DOM  node by declaring the element function in react.The code below contains a combination of HTML and javascript. The HTML code above is similar to XML . JSX  tags have a name , children and attributes. Numeric values and expressions must be written inside curly  brackets. The quotation mark in JSX  attributes represent strings,similarly  to javascript. In most  cases , React is written  using JSX instead of standard javascript to simplify  components and keep code clean .A react app usually has a single root DOM node.Rendering an element into the DOM will change the user interface of the page. Whenever a react component returns an element, the Virtual DOM will update the real DOM to match.

            </p>
            <h1>How does setState Work ?</h1>
            <p> The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time ; whenever it changes,the component re-renders.The change in state can happen as a response to user action or system-generated events and these changes determine the  behavior of the component and how it will render. A state can be modified based on user action or network changes .Every time the state of an objects changes , react re-renders the component to the browser. The state object is initialized in the constructor , The state object can store multiple properties, this.setState() is used to change the value of the state object , setState() function performs a shallow merge between the new and the previous state </p>     </div>
    );
};

export default Question;