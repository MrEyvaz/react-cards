import './App.css';
import CardContainer from './components/CardContainer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styles from './components/index.module.css'

function App() {
  return (
    <div className={styles['App']}>
     <CardContainer/>
    </div>
  );
}

export default App;