"use client";
import React, { useState } from "react";
import {
  ChevronRight,
  Check,
  Hospital,
  UserPlus,
  ClipboardCheck,
  CreditCard,
  BarChart,
} from "lucide-react";

const OnboardingSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [expandedStep, setExpandedStep] = useState(null);

  const steps = [
    {
      title: "Member Registration",
      description:
        "Nurses and Midwives register with their hospital and personal details",
      icon: UserPlus,
      details: [
        "Fill in personal information (name, contact, ID)",
        "Select region, district, and hospital",
        "Upload required documents (license, certificates)",
        "Submit membership request",
        "Receive confirmation email",
      ],
    },
    {
      title: "HR List Generation",
      description: "Hospital HR generates monthly list of eligible members",
      icon: Hospital,
      details: [
        "Access HR dashboard",
        "Generate monthly staff list",
        "Mark eligible members for union fees",
        "Review and validate staff details",
        "Submit list for OC Salary review",
      ],
    },
    {
      title: "OC Salary Validation",
      description: "OC Salary validates the list and confirms eligible members",
      icon: ClipboardCheck,
      details: [
        "Review HR generated list",
        "Verify employment status",
        "Confirm salary deduction eligibility",
        "Approve final list",
        "Forward to CAO for processing",
      ],
    },
    {
      title: "CAO Payment Processing",
      description: "CAO processes payments and uploads payment proof",
      icon: CreditCard,
      details: [
        "Process salary deductions",
        "Generate payment summary",
        "Transfer funds to union account",
        "Upload payment confirmation",
        "Submit detailed payment report",
      ],
    },
    {
      title: "UNMU Verification",
      description: "Union verifies payments and generates reports",
      icon: BarChart,
      details: [
        "Verify received payments",
        "Reconcile member payments",
        "Generate regional reports",
        "Create district summaries",
        "Update member payment status",
      ],
    },
  ];

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const toggleStepDetails = (index: any) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-8 text-center">
          UNMU Membership System Flow
        </h2>
        <div className="">
          <a
            className="text-blue-600"
            href="https://app.eraser.io/workspace/UEPacZwiG1PNuHBIiiEu?origin=share"
          >
            View Diagram
          </a>
        </div>
      </div>
      <div className="space-y-3 pb-24">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index + 1 === currentStep;
          const isCompleted = index + 1 < currentStep;
          const isExpanded = expandedStep === index;

          return (
            <div key={index} className="space-y-2 ">
              <div
                className={`flex items-center p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-blue-50 border-2 border-blue-500"
                    : "bg-gray-50"
                }`}
                onClick={() => toggleStepDetails(index)}
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${
                    isCompleted
                      ? "bg-green-500"
                      : isActive
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-6 h-6 text-white" />
                  ) : (
                    <Icon
                      className={`w-6 h-6 ${
                        isActive ? "text-white" : "text-gray-600"
                      }`}
                    />
                  )}
                </div>

                <div className="ml-4 flex-1">
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {step.description}
                  </p>
                </div>

                <ChevronRight
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    isExpanded ? "rotate-90" : ""
                  } ${isActive ? "text-blue-500" : "text-gray-400"}`}
                />
              </div>

              {isExpanded && (
                <div className="md:ml-16 p-4 bg-gray-50 rounded-lg">
                  <ul className="md:pl-4 space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="text-gray-700 flex items-center text-sm md:text-base"
                      >
                        <Check className="w-4 h-4 mr-2 text-blue-400" />{" "}
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={handlePreviousStep}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-lg transition-colors ${
            currentStep === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          disabled={currentStep === steps.length}
          className={`px-6 py-2 rounded-lg transition-colors ${
            currentStep === steps.length
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Next
        </button>
      </div> */}
      <div className="mt-8 flex justify-center space-x-4 fixed bottom-0 left-0 bg-blue-950 w-full py-4">
        <button
          onClick={handlePreviousStep}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-lg transition-colors ${
            currentStep === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Previous step
        </button>
        <button
          onClick={handleNextStep}
          disabled={currentStep === steps.length}
          className={`px-6 py-2 rounded-lg transition-colors ${
            currentStep === steps.length
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default OnboardingSteps;
