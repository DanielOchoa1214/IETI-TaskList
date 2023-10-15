import { Header } from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const HomePage = lazy(() => import("./pages/HomePage"));
const TasksPage = lazy(() => import("./pages/TasksPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={
            <Suspense fallback="Cargando...">
              <HomePage />
            </Suspense>
          } />
          <Route path='/tasks' element={
            <Suspense fallback="Cargando...">
              <TasksPage />
            </Suspense>
          } />
          <Route path='/about-us' element={
            <Suspense fallback="Cargando...">
              <AboutUsPage />
            </Suspense>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
