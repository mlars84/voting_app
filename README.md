# Voting App
Created following tutorial in Fullstack-React-Book

## Built With
ReactJS

### Running the app

1. Ensure you have `npm` installed.

Follow the instructions for your platform [here](https://github.com/npm/npm).

2. Install `http-server`

````
npm install
````

3. Boot the HTTP server

````
npm run server
````

The server is now running at [localhost:3000](localhost:3000)

### Notes
---
- We pass the props along individually to the Product component using the syntax [propName]=[propValue]
- In JSX, braces are a `delimiter`, signaling to JSX that what resides in-between the braces is a JavaScript expression. The other delimiter is using quotes for strings, like this: id='1'
- `this` is a special keyword in JavaScript. The details about `this` are a bit nuanced, but for the purposes of the majority of this book, `this` will be bound to the React component class. So, when we write `this.props` inside the component, we’re accessing the props property on the component. When we diverge from this rule in later sections, we’ll point it out.
For more details on this, check out this page on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).
- React favors the idea of one-way data flow. This means that data changes come from the “top” of the app and are propagated “downwards” through its various components.
- A child component does not own its props. Parent components own the props of child components.
- When working inside render(), `this` is always bound to the component. But inside our custom component method `handleUpVote()`, this is actually null.
- For the `render()` function and others(`componentDidMount()`), React binds `this` to the component for us. React specifies a default set of special API methods. `render()` is one such method.
- Any time we define our own custom component methods, we have to manually bind `this` to the component ourselves.
- Whenever we want to bind custom component methods to a React component class, we can use this pattern:

```
class MyReactComponent extends React.Component {
  constructor(props) {
      super(props); // always call this first
    // custom method bindings here
this.someFunction = this.someFunction.bind(this);
  }
}
```
- When defining custom methods on our React component classes, we must perform the binding pattern inside constructor() so that this references our component.
- 
