import {BrowserRouter, Routes, Route, Link } from "react-router";
import Layout from "./components/Layout";
import Overview from "./pages/overview";

const App = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Overview />} />
                <Route path="settings" element={<h1>Hi from settings</h1>} />
            </Route>
            
        </Routes>
        </BrowserRouter>
    );
}

export default App;