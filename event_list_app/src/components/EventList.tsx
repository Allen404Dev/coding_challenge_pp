import { useEffect, useState } from "react";
import EventCard from "./EventCard";

type Event = {
  "@id": string;
  "@type": string[];
  name: string;
  startDate: string;
  endDate: string;
  description?: string;
  image?: ImageObject[];
  location?: Place[];
  performer?: Organization[];
  organizer?: Organization[];
  "dc:slug"?: string;
};

type ImageObject = {
  "@id": string;
  "@type": string[];
  name?: string;
  caption?: string;
  description?: string;
  "dc:originalUrl"?: string;
  thumbnailUrl?: string;
  contentUrl?: string;
  width?: QuantitativeValue;
  height?: QuantitativeValue;
  contentSize?: number;
  fileFormat?: string;
  uploadDate?: string;
  author?: Person[];
  copyrightHolder?: Person[];
  "dc:slug"?: string;
};

type QuantitativeValue = {
  "@type": string;
  identifier?: string;
  name?: string;
  unitCode?: string;
  unitText?: string;
  "@id"?: string;
  value?: number;
};

type Place = {
  "@id": string;
  "@type": string[];
};

type Organization = {
  "@id": string;
  "@type": string[];
};

type Person = {
  "@id": string;
  "@type": string[];
};

const EventList = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://data.carinthia.com/api/v4/endpoints/557ea81f-6d65-6476-9e01-d196112514d2?include=image&token=9962098a5f6c6ae8d16ad5aba95afee0"
    )
      .then((response) => {
        if (!response.ok) {
          console.log("error :///");
        }

        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        setEvents(data["@graph"]);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Lade Eventsss...</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {events.map((event, i) => (
        <EventCard
          key={i}
          name={event.name}
          startDate={event.startDate}
          endDate={event.endDate}
          description={event.description}
          image={event.image}
        />
      ))}
    </div>
  );
};

export default EventList;
