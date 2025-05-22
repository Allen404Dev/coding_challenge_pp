import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  eventId: string;
};

const DetailButton = ({ eventId }: Props) => {
  return (
    <Link to={`/event/${eventId}`} className="w-fit">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 flex gap-2 w-fit">
        <ArrowUpRight />
        Details ansehen
      </button>
    </Link>
  );
};

export default DetailButton;
