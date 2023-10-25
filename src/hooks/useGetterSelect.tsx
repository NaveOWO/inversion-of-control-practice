import { useState } from "react";

function callFnsInSequence(...fns: unknown[]) {
  return function (...args: unknown[]) {
    fns.forEach(function (fn: any) {
      fn && fn(...args);
    });
  };
}

export function useGetterSelect() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const toggleBox = () => {
    setOpen((prev) => !prev);
  };

  const select = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    setSelectedItem(target.textContent);
    toggleBox();
  };

  const getToggleProps = ({ onClick, ...otherProps }: any = {}) => ({
    onClick: callFnsInSequence(toggleBox, onClick),
    open,
    ...otherProps,
  });

  const getSelectProps = ({ onClick, ...otherProps }: any = {}) => ({
    onClick: callFnsInSequence(select, onClick),
    selectedItem,
    ...otherProps,
  });
  return {
    selectedItem,
    open,
    toggleBox,
    select,
    getToggleProps,
    getSelectProps,
  };
}
