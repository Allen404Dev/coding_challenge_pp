import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { Event } from "../types/types";
import LoadingIndicator from "./LoadingIndicator";
import ErrorMessage from "./ErrorMessage";

type Props = {
  searchText: string;
};

const EventList = ({ searchText }: Props) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://data.carinthia.com/api/v4/endpoints/557ea81f-6d65-6476-9e01-d196112514d2?include=image,location&token=9962098a5f6c6ae8d16ad5aba95afee0"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fehler beim laden der Daten!");
        }

        return response.json();
      })
      .then((data) => {
        console.log("data", data);

        setEvents(data["@graph"]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fehler beim Laden:", error);
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorMessage />;

  // Filtere die Events nach Suchtext (Name oder Beschreibung)
  const filteredEvents = events.filter((event) => {
    const lowerSearch = searchText.toLowerCase();
    return (
      event.name.toLowerCase().includes(lowerSearch) ||
      (event.description?.toLowerCase().includes(lowerSearch) ?? false)
    );
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
      {filteredEvents.map((event, i) => (
        <EventCard key={i} event={event} />
      ))}
    </div>
  );
};

export default EventList;
