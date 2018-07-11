console.log('App.js is running')

// JSX - Javascript XML
// var template = <p>This is JSX from app.js!</p>
var template = React.createElement(
  "p",
  { className: "class", id: "id" },
  "This is JSX from app.js!"
);
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)