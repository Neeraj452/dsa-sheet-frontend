import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import {  AuthProvider } from "./context/context";

function App() {


  return (
      <Router>
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
      </Router>
  );
}

export default App;
