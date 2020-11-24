import logo from './logo.svg';
import './App.css';
import Lightswitch from './Components/Lightswitch';
import DataContextProvider from './Context/Lightcontext';

function App() {
  return (
    <DataContextProvider >
    <div className="App">
      <Lightswitch />
    </div>

    </DataContextProvider>
  );
}

export default App;
