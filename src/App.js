import './scss/style.scss';
import Heading from './components/Heading';

function App() {
  const { REACT_APP_MY_ENV } = process.env;
  return (
    <>
      <Heading />
    </>    
  );
}

export default App;
