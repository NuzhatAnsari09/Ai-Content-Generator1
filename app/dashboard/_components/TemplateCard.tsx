import Image from "next/image";
import React from "react";
import { TEMPLATES } from "./TemplatelistSection";
import Link from "next/link";

function TemplateCard(item: TEMPLATES) {
  return (
    <Link href={"/dashboard/content/" + item?.slug}>
      <div className="p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all w-full h-full max-w-xs">
        <div className="flex justify-center">
          <div className="w-12 h-12 relative">
            <Image
              src={item.icon}
              alt="icon"
              layout="fill"
              objectFit="contain"
              className="block"
            />
          </div>
        </div>
        <h2 className="font-medium text-lg text-center">{item.name}</h2>
        <p className="text-gray-500 text-sm text-center line-clamp-3">
          {item.desc}
        </p>
      </div>
    </Link>
  );
}

export default TemplateCard;
