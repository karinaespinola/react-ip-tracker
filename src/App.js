import './scss/style.scss';
import Heading from './components/Heading';
import Map from './components/Map';

function App() {
  const { REACT_APP_MY_ENV } = process.env;
  return (
    <>
      <Heading />
      <Map />
    </>    
  );
}

export default App;
