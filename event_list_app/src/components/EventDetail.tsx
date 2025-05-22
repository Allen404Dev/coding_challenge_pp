import { useParams } from "react-router-dom";

const EventDetail = () => {
  const { id } = useParams();

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">Details für Event: {id}</h1>
    </div>
  );
};

export default EventDetail;
