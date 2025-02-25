import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

interface InputProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export const Input = ({ query, onQueryChange }: InputProps) => {
  return (
    <div className="relative w-full max-w-[800px] m-auto">
      <input
        type="text"
        value={query}
        placeholder="Search title, description etc..."
        onChange={(e) => onQueryChange(e.target.value)}
        className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
        {query && (
          <IoIosClose
            className="text-gray-500 text-2xl cursor-pointer"
            onClick={() => onQueryChange("")}
          />
        )}
        <div className="h-5 w-[1px] bg-gray-400"></div>
        <CiSearch className="text-gray-500 text-xl" />
      </div>
    </div>
  );
};
