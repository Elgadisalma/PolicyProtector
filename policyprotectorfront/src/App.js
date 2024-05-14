import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardView from './views/DashboardView';
import LoginView from './views/LoginView';
import TablesView from './views/TablesView';


function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<LoginView />} />
    <Route path="/dashboard" element={<DashboardView />} />
    <Route path="/tables" element={<TablesView />} />

    </Routes>
  </Router>
  );
}

export default App;
