import React, { useState } from "react";

export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currnetIndex, setCurrentIndex] = useState(0);

  const goToNext = (stepData) => {
    const nextIndex = currnetIndex + 1;
    const updatedData = {
      ...onboardingData,
      ...stepData,
    };
    console.log(updatedData);
    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }
    setOnboardingData(updatedData);
  };

  const goToPrevious = (stepData) => {
    const previousIndex = currnetIndex - 1;
    const updatedData = {
      ...onboardingData,
      ...stepData,
    };
    console.log(updatedData);
    if (previousIndex >= 0) {
      setCurrentIndex(previousIndex);
    } else {
      onFinish(updatedData);
    }
    setOnboardingData(updatedData);
  };

  const currentChild = React.Children.toArray(children)[currnetIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext, goToPrevious });
  }
  return currentChild;
};
