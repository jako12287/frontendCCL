import { StrictMode, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <StrictMode>
        <Suspense fallback={<>CLL Cargando...</>}>
          <ToastContainer />
          <RouterProvider router={router} />
        </Suspense>
      </StrictMode>
    </Provider>
  );
}

export default App;
