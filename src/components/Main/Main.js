import '../App/App.css';
import Hero from '../Hero/Hero';
import Map from '../Map/Map';
import Suggested from '../Suggested/Suggested';
import AddForm from '../Form/AddForm';

export default function Main({ workers, setWorkers }) {
  return (
    <>
      <Hero />
      <Map />
      <Suggested workers={workers} setWorkers={setWorkers} />
      <AddForm />
    </>
  );
}
