import { Outlet } from 'react-router-dom';
import Pedidos from './routes/Pedidos';
import Home from './routes/Home';
import Caja from './routes/Caja';
import Admin from './routes/Admin';
import Navbar from './components/navbar/Navbar';

function App() {
  return <><Navbar /><Outlet /></>;
}

export const appRoutes = [{
  element: <App />,
  children: [
    { path: '/', element: <Home /> },
    { path: 'pedidos', element: <Pedidos /> },
    { path: 'caja', element: <Caja /> },
    { path: 'admin', element: <Admin /> },
  ],
}];

export default App;
