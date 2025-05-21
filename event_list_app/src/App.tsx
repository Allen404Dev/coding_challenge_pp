import "./App.css";
import EventList from "./components/EventList";

function App() {
  return (
    <>
      <div className="bg-blue-100">
        <div className="container mx-auto py-20">
          <EventList />
        </div>
      </div>
    </>
  );
}

export default App;
