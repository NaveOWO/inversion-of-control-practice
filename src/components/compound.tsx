import "./style.css";
import { createContext, PropsWithChildren, useContext, useState } from "react";

const SelectContext = createContext<{
  selectedItem: string | null;
  open: boolean;
  toggleBox: () => void;
  select: (e: React.MouseEvent<HTMLDivElement>) => void;
}>({
  selectedItem: null,
  open: false,
  toggleBox: () => {},
  select: (e: React.MouseEvent<HTMLDivElement>) => {},
});

function ConmpoundedSelect(props: PropsWithChildren) {
  const { children } = props;

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

  return (
    <SelectContext.Provider value={{ selectedItem, open, toggleBox, select }}>
      {children}
    </SelectContext.Provider>
  );
}

function Trigger({ triggerLabel }: any) {
  const { toggleBox } = useContext(SelectContext);

  return <button onClick={toggleBox}>{triggerLabel}</button>;
}

function Option({ optionItem }: any) {
  const { select } = useContext(SelectContext);

  return <div onClick={select}>{optionItem}</div>;
}

export const Select = Object.assign(ConmpoundedSelect, {
  Trigger,
  Option,
});
