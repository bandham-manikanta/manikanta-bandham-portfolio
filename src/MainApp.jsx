import React, { useState, useEffect, Suspense } from 'react';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom'; // Update imports
=======
import { Switch, Route } from 'react-router-dom';
>>>>>>> 257de97 (Initial Commit)
import FallbackSpinner from './components/FallbackSpinner';
import NavBarWithRouter from './components/NavBar';
import Home from './components/Home';
import endpoints from './constants/endpoints';

function MainApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.routes, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div className="MainApp">
      <NavBarWithRouter />
      <main className="main">
<<<<<<< HEAD
        <Suspense fallback={<FallbackSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {data && data.sections.map((route) => {
=======
        <Switch>
          <Suspense fallback={<FallbackSpinner />}>
            <Route exact path="/" component={Home} />
            {data
              && data.sections.map((route) => {
>>>>>>> 257de97 (Initial Commit)
                const SectionComponent = React.lazy(() => import('./components/' + route.component));
                return (
                  <Route
                    key={route.headerTitle}
                    path={route.path}
<<<<<<< HEAD
                    element={<SectionComponent header={route.headerTitle} />}
                  />
                );
              })}
          </Routes>
        </Suspense>
=======
                    component={() => (
                      <SectionComponent header={route.headerTitle} />
                    )}
                  />
                );
              })}
          </Suspense>
        </Switch>
>>>>>>> 257de97 (Initial Commit)
      </main>
    </div>
  );
}

export default MainApp;
