# Re-learn React

### Component Principles

React is pretty flexible but it has a single strict rule:

All React components must act like pure functions with respect to their props.




### Using State Correctly

##### Do Not Modity State Directly

Below won't re-render component
```js
// Wrong
this.state.comment = 'Hello';
```

The only place where you can assign `this.state` is the constructor.






##### State Updates May Be Asynchronous

React may batch multiple `setState()` calls into a single update for performance.

Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.

For Example, this code may fail to update the counter.
```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```



To fix it, use a second form of `setState()` that accepts a function rather than an object. That funciton will receive the previous state as the first argument, and the props at the time the update is applied as the second argument.

```js
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```





# Handling Events

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.
- Another difference is that you cannot return `false` to prevent default behavior in React. You must call `precentDefault` explicit.

​        In React, this could be:

```js
function Form() {
	function handleSubmit(e) {
		e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
	);
}
```


# Listing

DO NOT USE INDEX AS A KEY

only safe when situation is below:

1. the list and items are static–they are not computed and do not change;
2. the items in the list have no ids;
3. the list is never reordered or filtered.


# Considering wheather do we need a state or not

1. Is it passed in from a parent via props? If so, it probably isn’t state.
2. Does it remain unchanged over time? If so, it probably isn’t state.
3. Can you compute it based on any other state or props in your component? If so, it isn’t state.


# Lifecycle

- Mounting
  - constructor
  - getDerivedStateFromProps
  - render
  - componentDidMount

- Updating
  - getDerivedStateFromProps
  - shouldComponentUpdate
  - render
  - getSnapshotBeforeUpdate
  - componentDidUpdate

- Unmounnting
  - componentWillUnmount

- Error Handling
  - getDerivedStateFromError
  - componentDidCatch


### React Hooks

### React Router V6