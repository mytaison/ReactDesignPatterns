import React from "react";

export const ControlledOnboardingFlow = ({
  children,
  onFinish,
  currnetIndex,
  onNext,
  onPrevious,
}) => {
  const goToNext = (stepdata) => {
    onNext(stepdata);
  };
  const goToPrevious = (stepdata) => {
    onPrevious(stepdata);
  };
  const currentChild = React.Children.toArray(children)[currnetIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext, goToPrevious });
  }
  return currentChild;
};
