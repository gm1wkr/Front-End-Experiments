# React Official tutorial code along

Tic-Tak-Toe [Tutorial from Reactjs.org](https://reactjs.org/tutorial/tutorial.html#inspecting-the-starter-code)

## Environment
```
npx create-react-app my-app
```

Remove boilerplate
```
cd my-app/src
rm *
```

```
cd ../
```

React developer tools installed into Chrome.

## Super()
The super keyword is used to access and call functions on an object's parent.  Must be called when extending class in React.  All React component classes that have a constructor should start with a super(props) call.

## Components
Each component is represented by a class (unless it is a 'functional component' as square becomes).  In this case we have the following components:

* Square
* Board
* Game

Since the Square components no longer maintain state, the Square components receive values from the Board component and inform the Board component when they’re clicked. In React terms, the Square components are now controlled components. The Board has full control over them. 

Square is a component of Board and Board is a component of Game.

## Props
Short for properties.  A way to pass data between components.

## SQUARE
The square component.