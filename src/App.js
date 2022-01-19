import MainComponent from "./MainComponent";
import { AuthProvider } from "./context/AuthContext";
import ProductsPovider from "./context/ProductContext";
import LocalProductsProvider from "./context/LocalProductContext";

function App() {
  return (
    <AuthProvider>
      <ProductsPovider>
        <LocalProductsProvider>
          <MainComponent />
        </LocalProductsProvider>
      </ProductsPovider>
    </AuthProvider>
  );
}

export default App;
