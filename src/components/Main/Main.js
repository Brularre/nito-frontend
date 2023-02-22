import '../App/App.css';
import Hero from '../Hero/Hero';
import Map from '../Map/Map';
import Suggested from '../Suggested/Suggested';

export default function Main({ workers, renderCards }) {
  return (
    <>
      <Hero />
      <Map />
      <Suggested workers={workers} renderCards={renderCards} />
    </>
  );
}
