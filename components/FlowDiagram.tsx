"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const DynamicFlowDiagram = () => {
  const flowConfig = {
    nodes: [
      {
        id: "nurse",
        title: "Nurse/Midwife",
        description: "Initiates registration process",
        nextSteps: ["unmu_admin"],
        color: "bg-blue-500",
      },
      {
        id: "unmu_admin",
        title: "UNMU Admin",
        description: "Confirms membership",
        nextSteps: ["hospital_hr"],
        color: "bg-green-500",
      },
      {
        id: "hospital_hr",
        title: "Hospital HR",
        description: "Generates monthly list",
        nextSteps: ["oc_salary"],
        color: "bg-purple-500",
      },
      {
        id: "oc_salary",
        title: "OC Salary",
        description: "Validates the list",
        nextSteps: ["cao"],
        color: "bg-yellow-500",
      },
      {
        id: "cao",
        title: "CAO",
        description: "Processes payment",
        nextSteps: ["unmu_dashboard"],
        color: "bg-red-500",
      },
      {
        id: "unmu_dashboard",
        title: "UNMU Dashboard",
        description: "Final reporting and verification",
        nextSteps: [],
        color: "bg-indigo-500",
      },
    ],
  };

  const [selectedNode, setSelectedNode] = useState(null);

  const renderNode = (node: any) => {
    const isSelected = selectedNode === node.id;
    const hasNextSteps = node.nextSteps.length > 0;

    return (
      <div key={node.id} className="flex flex-col items-center">
        <div
          className={`w-full max-w-md p-4 rounded-lg shadow-md transition-all duration-300 cursor-pointer
            ${isSelected ? "scale-105" : ""}`}
          onClick={() => setSelectedNode(isSelected ? null : node.id)}
        >
          <div className="flex items-center space-x-4">
            <div
              className={`w-12 h-12 rounded-full ${node.color} flex items-center justify-center text-white font-bold`}
            >
              {node.title[0]}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{node.title}</h3>
              <p className="text-gray-600 text-sm">{node.description}</p>
            </div>
            {hasNextSteps && <ChevronRight className="w-6 h-6 text-gray-400" />}
          </div>
        </div>

        {hasNextSteps && <div className="w-px h-8 bg-gray-300" />}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-8 text-center">UNMU System Flow</h2>
      <div className="space-y-2">{flowConfig.nodes.map(renderNode)}</div>
    </div>
  );
};

export default DynamicFlowDiagram;
