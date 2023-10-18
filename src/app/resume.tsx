"use client";
import React from "react";
import { resumeData } from "@/data";
import { ResumeCard } from "./components/resumeCard/ResumeCard";

export default function Resume() {
  return (
    <div>
      {resumeData.map((item) => (
        <ResumeCard
          key={item.id}
          title={item.title}
          date={item.date}
          location={item.location}
          description={item.description}
          technology={item.technology}
          link={item.link}
        />
      ))}
    </div>
  );
}
