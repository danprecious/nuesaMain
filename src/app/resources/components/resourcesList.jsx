import React from "react";

const ResourcesList = () => {
  return (
    <div>
      <MaterialResources />
      <PastQuestionsResources />
    </div>
  );
};

export default ResourcesList;

export const MaterialResources = () => {
  return <div className="">Materials</div>;
};

export const PastQuestionsResources = () => {
  return <div className="">PastQuestionsResources</div>;
};
