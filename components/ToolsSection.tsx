import React from "react";
import Section from "./Section";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const tools = [
  {
    title: "Resume Builder",
    description:
      "Our resume builder helps you create a professional resume in minutes.",
  },
  {
    title: "Cover Letter Builder",
    description:
      "Create a professional cover letter in minutes with our cover letter builder.",
  },
  {
    title: "Interview Prep",
    description:
      "Prepare for your next interview with our interview preparation tools.",
  },
];

const ToolsSection = () => {
  return (
    <Section
      title="Tools"
      description="We provide you with the tools to get you hired. From resume building
          to interview preparation, we have you covered."
      className="bg-muted/50"
    >
      <div className="flex flex-col md:flex-row gap-10 items-center my-10">
        {tools.map((tool, index) => (
          <Card key={index} className="max-w-xs h-[20rem]">
            <CardHeader className="flex items-center justify-center h-20">
              <CardTitle className="text-xl">{tool.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {tool.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ToolsSection;
