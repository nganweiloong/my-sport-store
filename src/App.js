import MainComponent from "./MainComponent";
import { AuthProvider } from "./context/AuthContext";
import ProductsPovider from "./context/ProductContext";

function App() {
  return (
    <AuthProvider>
      <ProductsPovider>
        <MainComponent />
      </ProductsPovider>
    </AuthProvider>
  );
}

export default App;
