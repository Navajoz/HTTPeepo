import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Header from '../components/Header';
import Footer from '../components/Footer'
import StatusPage from './StatusPage';
import useStatusData from '../components/statusHook';

const AppRouter = () => {
  const statusData = useStatusData();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StatusPage/:statusNumber" element={<StatusPage statusData={statusData} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
