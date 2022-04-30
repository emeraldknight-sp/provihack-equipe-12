import MainRoutes from './routes';
import GlobalStyle from './styles/global';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <GlobalStyle />
      <MainRoutes />
    </>
  );
}

export default App;
