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

type Props = {
  name: string;
  startDate: string;
  endDate: string;
  description?: string;
  image?: ImageObject[];
};

const EventCard = ({ name, startDate, endDate, description, image }: Props) => {
  const startDateFormatted = new Date(startDate).toLocaleString("de-AT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const endDateFormatted = new Date(endDate).toLocaleString("de-AT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="rounded-md shadow-xl overflow-hidden bg-white">
      <div className="h-48 w-full">
        <img
          src={image?.[0]?.contentUrl ?? ""}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <div>{startDateFormatted}</div>
        <div>{endDateFormatted}</div>
        <div className="line-clamp-3 text-gray-700">{description}</div>
      </div>
    </div>
  );
};

export default EventCard;
