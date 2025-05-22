import detailIcon from "../assets/arrow-right-up-svgrepo-com.svg";

const DetailButton = () => {
  return (
    <button className=" bg-[#42a5f5] w-fit py-2 px-4 rounded-full uppercase font-semibold flex flex-row items-center gap-2 hover:bg-blue-500 transition-all duration-300 ">
      <img src={detailIcon} className="w-8" />
      Mehr
    </button>
  );
};

export default DetailButton;
