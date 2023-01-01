import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './component/Footer';
import Podcasts from './component/Podcasts';
import Todo from './component/Todo';
import Youtube from './component/Youtube';
function App() {
  return (<div>
  <Podcasts />
  <Router>
  <Routes>
   <Route path="/Youtube" element={<Youtube />} />
   </Routes>
    </Router>
    <Footer />
  </div>
  );
}

export default App;
