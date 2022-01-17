import MainComponent from "./MainComponent";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <MainComponent />
    </AuthProvider>
  );
}

export default App;
