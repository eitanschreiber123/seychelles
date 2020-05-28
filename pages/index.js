import React, { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Products from '/data'
import Nav from 'components/Nav'
import styled from 'styled-components'
import { getSortedPostsData } from '/lib/posts'
const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: black;
  }
  .first {
    width: 100%;
    height: 300px;
    margin: 0;
    padding: 0;
    background-image: url('/header.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .p-first, .p-second {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .farms {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
  }
  .farms div {
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .farm-1 {
    background-image: url('/farm1.jpg');
  }
  .farm-2 {
    background-image: url('/farm2.jpg');
  }
  .farm-3 {
    background-image: url('/farm3.jpeg');
  }
  .header-s {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: black;
  }
  .products {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
  .prodicts p {
    text-align: center;
  }
  .product-image {
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`
class IndexPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Wrapper>
        <Nav/>
        <div className="header"><h1>Rotuman Exports</h1></div>
        <div className="first"></div>
        <p className="p-first">Rotuma is a beautiful island about 620km north of fiji with incredible nature and picturesque beaches and an abundance of crops</p>
        <div className="farms">
          <div className="farm-1"></div>
          <div className="farm-2"></div>
          <div className="farm-3"></div>
        </div>
        <p className="p-second">We are the exclusive exporter of rotuman products, we ship worldwide and offer premium products and service</p>
        <div className="header-s"><h1>Explore Our Products</h1></div>
        <div className="products">{Products.map(p => <Link href="/p/[id]" as={`/p/${p.route}`}><a><div style={{margin: `50px`, display: `column`}}><div style={{backgroundImage: `url(${p.image})`}} className="product-image"></div><p>{p.other ? p.other : p.id}</p></div></a></Link>)}</div>
      </Wrapper>
    )
  }
}
export default IndexPage
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
