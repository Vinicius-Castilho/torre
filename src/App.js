import RoutesApp from "./routes";
import CookieBanner from "./components/CookieBanner";

function App() {
  return (
      <div className="bg-sky-500">
        <RoutesApp/>
        <CookieBanner />
      </div>
  );
}

export default App;