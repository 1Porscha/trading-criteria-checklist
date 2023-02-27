import logo from './logo.svg';
import './App.css';

function App() {
  //test call to a route route
  const testFunction = async () => {
    const response = await fetch("/test_route")
  }
  testFunction()

  return (
    <div className="App">
      <h1>Trading Criteria Checklist</h1>
    </div>
  );
}

export default App;
