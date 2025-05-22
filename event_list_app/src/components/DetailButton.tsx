import { Link } from "react-router-dom";

type Props = {
  eventId: string;
};

const DetailButton = ({ eventId }: Props) => {
  return (
    <Link to={`/event/${eventId}`}>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Details ansehen
      </button>
    </Link>
  );
};

export default DetailButton;
