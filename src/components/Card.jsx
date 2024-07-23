import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, refrence }) {
  const [close, setClose] = useState(true)
  const [isOpen,setIsOpen] =useState(true)
  
  function handleClick() {
    setClose(c => !c);
    setIsOpen(o => !o);
  }
   
  return (
    <motion.div
      drag
      dragConstraints={refrence}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{bounceStiffness:400,bounceDamping:60}}
      className="relative flex-shrink-0 w-52 h-64 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10  overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-xs leading-right mt-3 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full   left-0">
        <div className="flex items-center justify-between py-3 px-8 mb-4">
          <h5>{data.filesize}</h5>
          <span onClick={handleClick } className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {close ? (
              <IoClose />
            ) : (
              <LuDownload size="0.8em" color="#fff" />
            )}
          </span>
        </div>
        {isOpen && (
          <div
            className={`tag w-full py-3 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            }  flex items-center justify-center`}
          >
            <h3 className="text-sm font-medium">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
