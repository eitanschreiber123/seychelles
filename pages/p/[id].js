import React, { Component } from 'react'
import { getAllPostIds, getPostData } from 'lib/posts'
import Layout from '../../layouts/Main'
import Products from '../../data';
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
const Wrapper = styled.div`
margin-left:150px;
display: flex;
flex-direction: row;
justify-content: flex-start;
margin-top: 100px;
.other {
  margin-right: 50px;
}
.other div {
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
}
.p {
  display: flex;
  flex-direction: row;
}
.p p {
  margin-right: 20px;
}
`
const ca = [];
export { ca }
class Post extends Component {
  constructor(props) {
    super(props);
  }
  handleAdd = a => {
    ca.push([this, a])
  }
  render() {
    return (
      <Layout>
        <Head><title>{this.props.postData.title}</title></Head>
        <Wrapper>
          <div className={"other"}>{Products.map(p => <div><div style={{width: "100px", height: "100px", BackgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: `url(${p.image})`, marginRight: `20px`}}></div><Link href="/p/[id]" as={`/p/${p.id}`}><a>{p.other ? p.other : p.id}</a></Link></div>)}</div>
          <div style={{width: "200px", height: "200px", BackgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: `url(${this.props.postData.image})`, marginRight: `20px`}}></div>
          <div>
            <h1>{this.props.postData.other ? this.props.postData.other : this.props.postData.title}</h1>
            <div>{this.props.postData.price_size.map(pr => <div className={"p"}><p>{pr}</p><button keyProp={pr} onClick={() => this.handleAdd(pr)}>add to cart</button></div>)}</div>
            <div dangerouslySetInnerHTML={{ __html: this.props.postData.contentHtml }} />
          </div>
        </Wrapper>
      </Layout>
    )
  }
}
export default Post

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return { props: { postData } }
}
