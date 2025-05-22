import "./App.css";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import EventList from "./components/EventList";
import EventDetail from "./components/EventDetail";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchText, setSearchText] = useState("");
  const location = useLocation();

  return (
    <>
      <Menu />
      <div className="bg-[#0f172a] min-h-screen">
        <div className="container mx-auto pt-30 pb-4 p-2">
          {location.pathname === "/coding_challenge_pp/" && (
            <div className="container mx-auto pt-30 pb-4 p-2">
              <SearchBar
                searchText={searchText}
                setSearchText={setSearchText}
              />
            </div>
          )}
        </div>
        <div className="container mx-auto pt-10 pb-24">
          <Routes>
            <Route
              path="/coding_challenge_pp/"
              element={<EventList searchText={searchText} />}
            />
            <Route path="/event/:id" element={<EventDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
