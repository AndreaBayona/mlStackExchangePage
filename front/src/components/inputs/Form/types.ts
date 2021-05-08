import styled from "styled-components";

export const DISPATCH_TYPES = [
  "setFalsePositive",
  "setLearning",
  "setArchitecture",
  "setProcessing",
  "setPipeline",
  "setInteresting",
  "setGoodPractices",
  "setPitfall",
  "setReferences",
] as const;

export const MULTIPLE_SELECTION_QUESTION = [
  {
    label: "Types of learning",
    options: [
      "Supervised",
      "Unsupervised",
      "Semi-supervised",
      "Reinforcement learning",
      "Unclear",
      "General",
      "Applies to more than one",
    ],
    dispatch: DISPATCH_TYPES[1],
  },
  {
    label: "Types of architecture",
    options: [
      "Deep",
      "Shallow",
      "unclear",
      "General",
      "Applies to more than one",
    ],
    dispatch: DISPATCH_TYPES[2],
  },
  {
    label: "Models of  processing",
    options: [
      "Batch",
      "Online",
      "Unclear",
      "General",
      "Applies to more than one",
    ],
    dispatch: DISPATCH_TYPES[3],
  },
  {
    label: "Stages in the ML pipeline ",
    options: [
      "Model requirements",
      "Data collection",
      "Data labeling",
      "Feature engineering",
      "Model training",
      "Model evaluation",
      "Model deployment",
      "Model monitoring",
      "General",
      "Applies to more than one",
    ],
    dispatch: DISPATCH_TYPES[4],
  },
];

export const BOOLEAN_QUESTION = [
  {
    label: "It is a false positive?",
    options: ["Yes", "No"],
    dispatch: DISPATCH_TYPES[0],
    disabled: false,
  },

  {
    label: "Is it an interesting case to discuss?",
    options: ["Yes", "No"],
    dispatch: DISPATCH_TYPES[5],
  },
];

export const TEXT_AREA_QUESTIONS = [
  {
    label: "Suggested Good practice",
    dispatch: DISPATCH_TYPES[6],
  },
  {
    label: "Pitfall/mistake/error that is related to good practice",
    dispatch: DISPATCH_TYPES[7],
  },
  {
    label: "External references",
    dispatch: DISPATCH_TYPES[8],
  },
];

export type Question = {
  label: string;
  options: string[];
};