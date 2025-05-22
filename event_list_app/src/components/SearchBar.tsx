import searchIcon from "../assets/search-alt-2-svgrepo-com.svg";

type Props = {
  searchText: string;
  setSearchText: (text: string) => void;
};

const SearchBar = ({ searchText, setSearchText }: Props) => {
  return (
    <div className="flex flex-row bg-white rounded-xl border-2 border-blue-500">
      <img src={searchIcon} className="w-8 m-4" />
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Suche Events..."
        className="w-full px-6 py-4 text-xl bg-white rounded-r-xl focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
