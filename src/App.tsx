import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page Components
import Home from './Pages/Components/Home';
import Support from './Pages/Components/Support';
import Service from './Pages/Components/Service';
import Process from './Pages/Components/Process';
import NavBar from './Pages/Components/NavBar';
import Article from './Pages/Components/Article';
import Footer from './Pages/Components/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/service" element={<Service />} />
        <Route path="/process" element={<Process />} />
        <Route path="/article" element={<Article />} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
