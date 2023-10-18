import { Header } from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ChakraProvider, extendTheme, Spinner } from '@chakra-ui/react';
import { Loader } from './components/Loader/Loader';
const HomePage = lazy(() => import("./pages/HomePage"));
const TasksPage = lazy(() => import("./pages/TasksPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));

function App() {
  const theme = extendTheme({
    fonts: {
      body: "Courier, sans-serif",
      heading: "Courier, serif",
      mono: "Courier, monospace",
    }
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={
              <Suspense fallback={<Loader/>}>
                <HomePage />
              </Suspense>
            } />
            <Route path='/tasks' element={
              <Suspense fallback={<Loader/>}>
                <TasksPage />
              </Suspense>
            } />
            <Route path='/about-us' element={
              <Suspense fallback={<Loader/>}>
                <AboutUsPage />
              </Suspense>} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App
