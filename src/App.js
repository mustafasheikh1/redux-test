import './App.css';
import { connect, useSelector } from 'react-redux';
import { addData } from './store/actions/dataAction';
import { persistor } from './store';

const App = (props) => {
  const { addData } = props;
  const { appData } = useSelector((state) => state);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{appData.data}</h1>
        <button style={{ margin: '1rem' }} onClick={() => addData(1)}>ADD</button>
        <button style={{ margin: '1rem' }} onClick={() => persistor.pause()}>PAUSE</button>
      </header>
    </div>
  );
}

export default connect(null, { addData })(App);
