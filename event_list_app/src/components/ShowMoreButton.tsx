import { ArrowDownIcon, Loader2 } from "lucide-react";

type Props = {
  isLoading: boolean;
  onNextPageClick: () => void;
};

const ShowMoreButton = ({ onNextPageClick, isLoading }: Props) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 flex gap-2"
      onClick={onNextPageClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="animate-spin w-5 h-5" />
      ) : (
        <ArrowDownIcon />
      )}
      {isLoading ? "Lädt..." : "Mehr anzeigen"}
    </button>
  );
};

export default ShowMoreButton;
