import './scss/style.scss';

function App() {
  const { REACT_APP_MY_ENV } = process.env;
  return (
    <div>
      {REACT_APP_MY_ENV}
    </div>    
  );
}

export default App;
