import React, { useState } from "react";

import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';

import localFont from "next/font/local";
const DanaRegular = localFont({
  src: "../../public/fonts/Dana/woff2/DanaFaNum-Regular.woff2",
});

const DanaBold = localFont({
  src: "../../public/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2",
});

const DanaMedium = localFont({
  src: "../../public/fonts/Dana/woff2/DanaFaNum-Medium.woff2",
});

const AccordinItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 mb-4 last:m-0">
      <button className="flex items-center justify-between w-full p-4 focus:outline-none focus:text-[#5E71FF] hover:text-[#5E71FF]" onClick={() => setIsOpen(!isOpen)}>
        <span className={`font-medium text-sm ${DanaBold.className} opacity-80`}>{title}</span>
        {isOpen ? <MinimizeIcon className="text-[#5E71FF]"/> : <AddIcon className="text-[#5E71FF]"/>}
      </button>

      {isOpen && (
        <div className={`p-4 text-gray-700 ${DanaRegular.className} text-sm font-normal opacity-60 text-justify`}>
            {content}
        </div>
      )}
    </div>
  );
};

const Accordin = ({ items }) => {
    return (
      <div className="w-full mx-auto bg-white rounded-2xl shadow-md">
        {items.map((item, index) => (
          <AccordinItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    );
  };

export default Accordin;
