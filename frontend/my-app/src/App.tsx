import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent'; // Импорт с заглавной буквы
import FooterComponent from './components/FooterComponent';
import IntroductionComponent from './components/IntroductionComponent';
import FeaturesComponent from './components/FeaturesComponent';
import BenefitsComponent from './components/BenefitsComponent';
import LoginComponent from './components/LoginComponent';
import DashboardComponent from './components/DashboardComponent';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterComponnet from './components/RegisterComponent';
import SidebarComponent from './components/SidebarComponent';
import ClientPageComponent from './components/CLientPageComponent'; 
import AddClientComponent from './components/AddClientComponent'; // Импорт нового компонента
import MoreInfoClientComponent from './components/MoreInfoClientComponent';
import TaskPageComponent from './components/TaskPageComponent';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={
          <>
            <IntroductionComponent />
            <FeaturesComponent />
            <BenefitsComponent />
          </>
        } />
        <Route path="/login" element={<LoginComponent />} />
        <Route path='/register' element={<RegisterComponnet />} />

        {/* Группа маршрутов для дашборда */}
        <Route path="/dashboard/*" element={
          <ProtectedRoute>
            <div className="flex">
              <SidebarComponent />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<DashboardComponent />} />
                  <Route path="settings" element={<LoginComponent />} />
                  <Route path="clients" element={<ClientPageComponent />} />
                  <Route path="clients/add" element={<AddClientComponent />} /> {/* Новый маршрут */}
                  <Route path="clients/moreInfo" element={<MoreInfoClientComponent />} /> 
                  <Route path="orders" element={<TaskPageComponent />} />
                </Routes>
              </div>
            </div>
          </ProtectedRoute>
        } />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;