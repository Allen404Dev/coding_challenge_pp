export type Event = {
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

export type ImageObject = {
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

export type QuantitativeValue = {
  "@type": string;
  identifier?: string;
  name?: string;
  unitCode?: string;
  unitText?: string;
  "@id"?: string;
  value?: number;
};

export type Place = {
  "@id": string;
  "@type": string[];
  address: {
    "@type": string;
    addressLocality: string;
  };
};

export type Organization = {
  "@id": string;
  "@type": string[];
};

export type Person = {
  "@id": string;
  "@type": string[];
};
