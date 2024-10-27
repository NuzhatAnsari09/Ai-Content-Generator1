import { Templates } from "@/app/(data)/Templates"; // Ensure the correct path to your data file
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";

export interface TEMPLATES {
  name: string;
  desc: string;
  category: string;
  slug: string;
  aiPrompt: string;
  icon: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplatelistSection({ userSearchInput }: any) {
  const [templateList, settemplateList] = useState(Templates);

  useEffect(() => {
    if (userSearchInput) {
      console.log(userSearchInput);
      const filterData = Templates.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      settemplateList(filterData);
    } else {
      settemplateList(Templates);
    }
  }, [userSearchInput]);

  return (
    <div className="p-5">
      {" "}
      {/* Add padding around the entire grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {" "}
        {/* Added gap for spacing between cards */}
        {templateList.map((item: TEMPLATES, index: number) => (
          <TemplateCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default TemplatelistSection;
