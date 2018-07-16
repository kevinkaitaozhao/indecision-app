class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)

    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
    const { visibility } = this.state
    this.setState((prevState) => {
      return{
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    const { visibility } = this.state
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{!visibility ? 'Show details' : 'Hide Details'}
        </button>
        {visibility && (
          <p>Here are some details you can now see</p>
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


// let visibility = false

// const toggleVisibility = () => {
//   if (!visibility) {
//     visibility = true
//     render()
//   } else {
//     visibility = false
//     render()
//   }
//   //visibility = !visibility
//   //render()
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
//       {visibility && (
//         <p>Here are some details you can now see!</p>
//       )
//       }
//     </div>
//   )

//   ReactDOM.render(template, document.getElementById('app'))
// }

// render()