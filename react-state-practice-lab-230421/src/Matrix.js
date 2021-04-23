import React, { Component } from 'react'
import pattern1 from './data'
import Cell from './Cell'

export default class Matrix extends Component {
  genRow = vals => {
    return vals.map(val => <div className='cell'></div>) // replace me and render a cell component instead!
  }

  genMatrix = () => {
    var matrixRows
    this.props.values
      ? (matrixRows = this.props.values.map(rowVals => (
          <div className='row'>{this.genRow(rowVals)}</div>
        )))
      : (matrixRows = pattern1.map(rowVals => (
          <div className='row'>{this.genRow(rowVals)}</div>
        )))
    return matrixRows
  }

  render () {
    return <div id='matrix'>{this.genMatrix()}</div>
  }
}
