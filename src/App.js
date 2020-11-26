import logo from './logo.svg';
import './App.css';
import Lightswitch from './Components/Lightswitch';
import DataContextProvider from './Context/Lightcontext';
import Picker from './Components/Picker'

function App() {
  return (
    <DataContextProvider >
    <div className="App">
     
      <Picker />
    </div>

    </DataContextProvider>
  );
}

export default App;
