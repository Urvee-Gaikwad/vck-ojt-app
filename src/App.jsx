import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import "./styles/pages.css";
import "../src/App.css";
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import AdmissionsPage from './pages/AdmissionsPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './component/Footer/Footer';
import Header from './component/Headers/Header';

function App () {
  return (
    <Router>
      <div className='main-layout'>
        <Header/>
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/courses" element={<CoursesPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/admissions" element={<AdmissionsPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}


export default App;