import React, { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Products from '/data'
import styled from 'styled-components'
import dynamic from 'next/dynamic';
import { getSortedPostsData } from '/lib/posts'
const MyMap = dynamic(() => import('components/map'), {ssr: false});
const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  padding: 0;
  text-align: center;
  .first {
    margin-bottom: 100px;
  }
  .boxes {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .ani:hover {
    color: blue;
  }
  .boxes div {
    padding: 10px;
    border: 1px solid black;
    width: 250px;
  }
  .active {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .active div {
    width: 200px;
    height: 200px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .ac-1 {
    background-image: url("/active_1.jpg");
  }
  .ac-2 {
    background-image: url("/active_2.jpg");
  }
  .ac-3 {
    background-image: url("/active_3.jpg");
  }
  .ac-4 {
    background-image: url("/active_4.jpg");
  }
  .ac-5 {
    background-image: url("/active_5.jpg");
  }
  .ac-6 {
    background-image: url("/active_6.jpg");
  }
  .ac-7 {
    background-image: url("/active_7.jpg");
  }
  .root {
    height: 300px;
    width: 300px;
    overflow: false;
  }
`
class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {inBrowser: false}
  }
  componentDidMount() {
    this.setState({ inBrowser: true });
  }
  render() {
    return (
      <Wrapper>
        <h1 className="first">Seychelles Plastic Cleanup</h1>
        <h1>What We Do</h1>
        <div className="boxes">
          <div>
            <h1 className="ani">Operation clean beach</h1>
            <p>We organize events and travel to the outer islands in the seychelles to clean plastic and maintian the beaches</p>
          </div>
          <div>
            <h1 className="ani">The business side</h1>
            <p>We take the plastic that we collect and sell it to companies</p>
          </div>
        </div>
        <h1>See where the events are</h1>
        <div className="root"><MyMap /></div>
        <div className="active">
          <div className="ac-1"></div>
          <div className="ac-2"></div>
          <div className="ac-3"></div>
          <div className="ac-4"></div>
          <div className="ac-5"></div>
          <div className="ac-6"></div>
          <div className="ac-7"></div>
        </div>
        <h1>Buy our plastic</h1>
        <p>content about buying plastic</p>
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
