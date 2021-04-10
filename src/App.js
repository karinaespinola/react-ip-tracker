import './scss/style.scss';
import Heading from './components/Heading';
import Map from './components/Map';
import IpDataProvider from './context/IpDataProvider';

function App() {
  const { REACT_APP_MY_ENV } = process.env;
  return (
    <IpDataProvider>
      <Heading />
      <Map />
    </IpDataProvider>      
  );
}

export default App;
