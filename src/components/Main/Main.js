import { useEffect, useContext } from 'react';
import '../App/App.css';
import Hero from '../Hero/Hero';
import Map from '../Map/Map';
import Suggested from '../Suggested/Suggested';

export default function Main(props) {
  return (
    <>
      <Hero />
      <Map />
      <Suggested workers={props.workers} />
    </>
  );
}
