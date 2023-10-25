import { useState } from "react";

export function useSelect() {
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

  return {
    selectedItem,
    open,
    toggleBox,
    select,
  };
}
