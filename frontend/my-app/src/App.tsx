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
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardComponent />
          </ProtectedRoute>
        } 
          />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
