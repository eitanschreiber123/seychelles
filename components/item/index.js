import React, { Component } from 'react'
import styled from 'styled-components'
import Dropdown from 'components/dropdown'
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  img {height: 200px;width: 200px;margin-right: 50px;}
  button {height: 50px;margin-left: 20px;}
  .rest {display: flex;flex-direction: column;}
  .last {display: flex;flex-direction: row;}
`
function inc (n, stop) {
  const f = []; let s = n
  f.push(s)
  while (s < stop) {
    s++
    f.push(s)
  }
  return f
}
class Item extends Component {
  constructor (props) {
    super(props)
    this.state = { numbers: inc(1, 10).map(n => { return { id: n, title: n, selected: false, key: 'numbers' } }) }
    this.handleResetThenSet = this.handleResetThenSet.bind(this)
  }

  handleResetThenSet (id, key) {
    const temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false)
    temp[id].selected = true
    this.setState({ [key]: temp })
  }

  render () {
    return (
      <Wrapper>
        <img src={this.props.image} />
        <div className="rest">
          <h1>{this.props.ti}</h1>
          <p>{this.props.pr}</p>
          <div className="last">
          <p>quantity</p>
          <Dropdown title={this.props.quan} list={this.state.numbers} resetThenSet={this.handleResetThenSet} />
          <button onClick={this.props.handleRemove}>remove</button>
          </div>
        </div>
      </Wrapper>
    )
  }
}
export default Item
