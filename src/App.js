import './App.css';
import { useState,useEffect } from 'react';
import BlogsPage from './Pages/blogs';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const urlEndpoint =
  "http://localhost:4000";

function App() {
  const [serverJSON,setServerJSON] = useState({message:null});
  
  useEffect(() => {
    const fetchData = async () => {
      const url = `${urlEndpoint}/blogs/all-blogs`
      const apiResponse = await fetch(url);
      const apiJSON = await apiResponse.json();
      setServerJSON(apiJSON);
      return;
    };
    fetchData();
  }, []); 
  return (
    <div className="App">
  <Routes>
    <Route path='/blogs'element={<BlogsPage message={serverJSON.message}/>}></Route>
  </Routes> 
    </div>
  );
}

export default App;
