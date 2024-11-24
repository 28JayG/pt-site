import { useState } from "react";

function useItemSelector<T>(initialWorks: T[]) {
  const [selectedItem, setSelectedItem] = useState<T>(initialWorks[0]);

  const handleNext = () => {
    const currentIndex = initialWorks.findIndex(
      (item) => item === selectedItem
    );
    const nextIndex = (currentIndex + 1) % initialWorks.length; // Wrap around to the start
    setSelectedItem(initialWorks[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = initialWorks.findIndex(
      (item) => item === selectedItem
    );
    const prevIndex =
      (currentIndex - 1 + initialWorks.length) % initialWorks.length; // Wrap around to the end
    setSelectedItem(initialWorks[prevIndex]);
  };

  return {
    selectedItem,
    handleNext,
    handlePrev,
  };
}

export default useItemSelector;
