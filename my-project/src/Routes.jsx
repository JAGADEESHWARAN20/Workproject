import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';

const routesConfig = [
  { name: 'Home', path: '/', component: Homepage },
  { name: 'About', path: '/about', component: About },
  { name: 'Contact', path: '/contact', component: Contact },

  // Add more routes here as needed
];

const AppRoutes = () => {
  return (
    <Routes>
      {routesConfig.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
      {/* Add a default route to handle any unmatched paths */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
