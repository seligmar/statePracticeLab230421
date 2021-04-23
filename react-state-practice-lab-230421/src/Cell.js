import React from 'react'

class Cell extends React.Component {
  state = {
    cellColour: this.props.value
  }

  changeColour = () => {
    this.setState({ cellColour: '#FF69B4' })
  }

  render () {
    console.log(this.props)
    var colour = this.state.cellColour
    return (
      <div
        className='cell'
        style={{ backgroundColor: colour }}
        onClick={this.changeColour}
      ></div>
    )
  }
}

export default Cell
