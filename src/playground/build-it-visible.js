let visibility = false

const toggleVisibility = () => {
  if (!visibility) {
    visibility = true
    render()
  } else {
    visibility = false
    render()
  }
  //visibility = !visibility
  //render()
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
      {visibility && (
        <p>Here are some details you can now see!</p>
      )
      }
    </div>
  )

  ReactDOM.render(template, document.getElementById('app'))
}

render()