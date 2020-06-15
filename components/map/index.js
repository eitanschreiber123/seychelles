import React, { Component, createRef } from 'react';
import { Map, TileLayer, LayersControl, Marker, Popup, MapControl, withLeaflet } from 'react-leaflet';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
//const a = [];
//const acc = Islands.map(i => { return {...i, out: false}});
//acc.forEach(i => i.activities.forEach(i => {if (a.includes(i) === false) {a.push(i)}}))
//const checkedAccess = [];
//const checkedActiv = [];
//const ischecked = [];
export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {collapsed: true,selected: 'home',center: {lat: -7.300000,lng: 50.3000000},zoom: 7,draggable: false,upDown: ``,dis : ``}}
  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    return (
        <Map center={position} zoom={this.state.zoom}>
          <ReactLeafletGoogleLayer type={'satellite'}/>
          {/*{this.state.m.filter(m => m.accesibility.some(a => this.state.filaccess.some(b => b == a))).filter(m => m.activities.some(a => this.state.filactiv.some(b => b == a))).map(m => <Marker key={m.name} position={[m.lat, m.lng]} animate={true}><Popup minWidth={100}><div className='int'><p>{m.name}</p><img src={m.image}/><p>{m.intro}</p><Link href="/p/[id]" as={`/p/${m.name}`}><a><div><button style={{padding: "10px 20px", backgroundColor: "blue",  borderRadius: "10px", color: "white"}}>Learn more</button></div></a></Link></div></Popup></Marker>)}*/}
        </Map>
    );
  }}
