"use client";
import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplatelistSection from "./_components/TemplatelistSection";

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>("");

  return (
    <div>
      {/* Search Section.. */}
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />
      {/* Template List Section.. */}
      <TemplatelistSection userSearchInput={userSearchInput} />
    </div>
  );
}

export default Dashboard;
