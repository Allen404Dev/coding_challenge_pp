import "./App.css";
import EventList from "./components/EventList";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu />
      <div className="bg-[#0f172a]">
        <div className="container mx-auto pt-24 pb-24">
          <EventList />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
