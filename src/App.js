import { HelmetProvider } from 'react-helmet-async';
import RoutesApp from "./routes";

function App() {
  return (
    <HelmetProvider>
      <div className="bg-sky-500">
        <RoutesApp/>
      </div>
    </HelmetProvider>
  );
}

export default App;