import React, { Component } from 'react'
import Cell from './Cell'

export default class Matrix extends Component {
  genRow = vals => {
    return vals.map(val => (
      <Cell key={vals.indexOf(val) + Math.random()} value={val} />
    ))
  }

  genMatrix = () => {
    var matrixRows
    var defaultArray = [
      '#F00',
      '#F00',
      '#F00',
      '#F00',
      '#F00',
      '#F00',
      '#F00',
      '#F00',
      '#F00',
      '#F00'
    ]
    this.props.values
      ? (matrixRows = this.props.values.map(rowVals => (
          <div className='row' key={this.props.values.indexOf(rowVals) + 1 * 3}>
            {this.genRow(rowVals)}
          </div>
        )))
      : (matrixRows = defaultArray.map(rowVals => (
          <div className='row' key={defaultArray.indexOf(rowVals)}>
            {this.genRow(rowVals)}
          </div>
        )))
    return matrixRows
  }

  render () {
    return <div id='matrix'>{this.genMatrix()}</div>
  }
}
