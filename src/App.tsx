import { ThemeProvider } from "./components/theme-provider";
import { lazy, Suspense } from "react"; // Import lazy and Suspense
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

// Dynamically import the Header component
const Header = lazy(() => import("./components/header"));

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        {/* Wrap the Header component with Suspense for loading fallback */}
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;