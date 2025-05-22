import DetailButton from "./DetailButton";
import parse from "html-react-parser";
import calenderIcon from "../assets/calendar-alt-svgrepo-com.svg";
import clockIcon from "../assets/time-filled-svgrepo-com.svg";
import locationIcon from "../assets/location-pin-svgrepo-com.svg";
import { ImageObject, Place } from "../types/types";

type Props = {
  name: string;
  startDate: string;
  endDate: string;
  description?: string;
  image?: ImageObject[];
  location?: Place[];
};

const EventCard = ({
  name,
  startDate,
  description,
  image,
  location,
}: Props) => {
  console.log("location:", location?.[0]?.address?.addressLocality);

  const startDateFormatted = new Date(startDate).toLocaleString("de-AT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const startTimeFormatted = new Date(startDate).toLocaleString("de-AT", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="rounded-xl shadow-xl bg-white">
      <div className="h-48 w-full">
        <img
          src={image?.[0]?.contentUrl ?? ""}
          alt={name}
          className="w-full h-full object-cover p-4"
        />
      </div>

      <div className="p-4 flex flex-col justify-between min-h-[350px] gap-4">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <div className="flex flex-row gap-8 justify-between">
          <div className="flex flex-row items-center gap-2">
            <img src={calenderIcon} className="w-8" />
            {startDateFormatted}
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src={clockIcon} className="w-8" />
            {startTimeFormatted}
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src={locationIcon} className="w-8" />
            {location?.[0]?.address?.addressLocality}
          </div>
        </div>

        <div className="text-gray-700 line-clamp-3">
          {parse(description ?? "")}
        </div>
        <div>
          <DetailButton />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
