import './App.css';
import { useRoutes } from 'react-router-dom';
import {routes} from './routes';

function App() {
  const elements = useRoutes(routes);
  return (
    <div id='components-form-demo-normal-login'>
      {elements}
    </div>
  );
}

export default App;
