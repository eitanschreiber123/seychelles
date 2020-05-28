import React, { Component } from 'react'
import Layout from 'layouts/Main'
import Item from 'components/item'
import { ca } from 'pages/p/[id]'
class CartPage extends Component {
  constructor (props) {
    super(props)
    this.state = { cartlist: ca.map(a => { return { id: a[0].props.postData.id, image: a[0].props.postData.image, quan: 1, pr: a[1] } }), disinput: false }
  }
  componentDidMount() {
    console.log(ca);
  }
  nomore = i => {
    this.setState(state => {
      const cartlist = this.state.cartlist.filter((item, j) => i !== j)
      return { cartlist }
    })
  };

  render () {
    return <Layout><ul>{this.state.cartlist.map((t, index) => <Item ti={t.id} pr={t.pr} image={t.image} quan={t.quan} handleRemove={() => this.nomore(index)} key={index} />)}</ul></Layout>
  }
}
export default CartPage
