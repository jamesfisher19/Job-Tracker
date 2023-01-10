import {FilterHeader, Checkboxes} from './components/Filters';
import Header from './components/Heading';
import './components/Filters.css';
import Form from './components/JobsField.js';
function App() {
  return (
    <div style={{ background: "#D7E9A8", height: "100vh", width: "100%" }}>
      <div className="App">
        <Header />
        <FilterHeader />
        <Checkboxes />
        <Form/>
      </div>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=w7ejDZ8SWv8