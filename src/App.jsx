import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/games/:id" Component={DetailPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider >
  );
}

export default App;