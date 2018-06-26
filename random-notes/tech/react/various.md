## The bind() function


When called, the `<function>.bind(<obj>)`, bind() transfers the scope from the *obj* object to the *function*.

```javascript
// This is a script with a global scope

// This is an object with its own scope (this.x = 10)
const obj = {
  x: 10,
  getX: function () { return this.x; }
}

const wontWork = obj.getX; //wontWork will not have an this.x defined
const willWork = obj.getX.bind(obj); //because we bind() the obj scope to the new object willWork, this.x IS defined

wontWork(); //prints undefined
willWork(); //prints 10
```

### Why use this in React?

In order to define functions that will trigger when a certain event happens (e.g. onClick()), we have to define the event handler functions in the Component constructor. In order for the event handler functions to have access to the component’s scope (to access this.state, for example), we have to use the bind() function to pass the scope!

```javascript
class ComponentA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {someState: ‘state’};
    this.handleClick = this.handleClick.bind(this); //handleClick will be able to access the component’s scope because it was bound to it when defined.
  }
```

More examples and explanation: https://facebook.github.io/react/docs/handling-events.html 

