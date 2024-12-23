import Collections from "./pages/Collections";
import LandingPage from "./pages/LandingPage";


const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div className="w-full h-full">
        <LandingPage />
      </div>
      <div className="w-full h-full">
        <Collections />
      </div>
    </div>
  );
};

export default App;
