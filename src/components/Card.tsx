import { CiStar } from "react-icons/ci";
import { MdOutlineTitle } from "react-icons/md";
import { motion } from "motion/react";

interface CardProps {
  title: string;
  body: string;
  star?: boolean;
}

export const Card = ({ title, body, star }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="p-4 rounded-lg h-full"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      }}
    >
      <div className="text-gray-500">
        <div className="flex items-center gap-2">
          <div>
            <MdOutlineTitle className="h-5 w-5 border border-blue-500 rounded-[2px] text-blue-500" />
          </div>
          <h1 className="font-medium capitalize text-sm truncate">{title}</h1>
        </div>
        <hr className="my-3 text-gray-300" />
        <p className="text-sm indent-7">{body}</p>
      </div>
      {star && (
        <div className="flex items-center justify-center mt-5">
          <CiStar className="h-6 w-6 text-blue-500" />
          <CiStar className="h-6 w-6 text-blue-500" />
          <CiStar className="h-6 w-6 text-blue-500" />
        </div>
      )}
    </motion.div>
  );
};
