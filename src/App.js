import { AllRoutes } from './routes/AllRoutes';
import './App.css';
import { Header} from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
    </div>
  );
}

export default App;
