import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Card from './components/Card';
import myImage1 from './assets/Project2/IMG_1929.PNG'
import myImage2 from './assets/Project1/my-image (10).png'

function App() {

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to my Portfolio</h1>
      <Button label="Click Me" onClick={handleClick}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and nevermind TOS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="card-container">
        <Card
          title="Bella"
          description="This is me with my girlfriend!"
          imageUrl={myImage1}
        />
        <Card
          title="Random"
          description="Kanye rating lol"
          imageUrl={myImage2}
        />

      </div>
    </div>
  );
}

export default App;
