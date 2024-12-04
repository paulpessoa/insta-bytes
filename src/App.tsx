import './App.css'

import ImageGrid from './components/ImageGrid';

function App() {
  return (
    <div className="App">
      <h1>Cat Cut</h1>
      <ImageGrid />
      <h3 className='text-red-600'> "Por favor, não toque nos gatos!" </h3>
    </div>
  );
}

export default App;

