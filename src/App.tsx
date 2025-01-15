import { StrictMode, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <StrictMode>
      <Suspense fallback={<>CLL Cargando...</>}>
        <ToastContainer />
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
}

export default App;
