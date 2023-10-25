import "./style.css";
import { useState } from "react";

interface OriginsSelectProps {
  options: string[];
  triggerLabel: string;
  buttonPosition: "top" | "bottom";
  disabledOptions: string[];
  defaultOpen: boolean;
  optionAlign: "row" | "column";
  checkIcon: string;
}

export default function OriginalSelect(props: OriginsSelectProps) {
  const { options } = props;

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
    <section className="container">
      <button className="openButton" onClick={toggleBox}>
        {selectedItem ?? "open me!"}
      </button>
      {open && (
        <section className="selectContainer">
          {options.map((option, idx) => {
            return (
              <div
                key={idx}
                className={`optionItem ${
                  selectedItem === option && "selected"
                }`}
                onClick={select}
              >
                {option}
              </div>
            );
          })}
        </section>
      )}
    </section>
  );
}
