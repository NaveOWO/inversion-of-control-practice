import { useControlled } from "../hooks/useControl";
import "./style.css";

interface ControlledSelectProps {
  options: string[];
  selectedItem?: string | null;
  select?: (e: React.MouseEvent<HTMLDivElement>) => void;
  open?: boolean;
  toggleBox?: () => void;
}

export default function ControlledSelect(props: ControlledSelectProps) {
  const { options, selectedItem, select, open, toggleBox } = props;
  const [innerSelectedItem, setInnerSelectedItem] = useControlled({
    value: selectedItem,
  });
  const [innerOpen, setInnerSetOpen] = useControlled<boolean>({
    value: open,
  });

  function innerSelect(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;

    setInnerSelectedItem(target.textContent);
    select?.(e);
    toggleBox?.();
  }

  function innerToggleBox() {
    setInnerSetOpen((prev: boolean) => !prev);
    toggleBox?.();
  }

  return (
    <section className="container">
      <button className="openButton" onClick={innerToggleBox}>
        {selectedItem ?? "open me!"}
      </button>
      {innerOpen && (
        <section className="selectContainer">
          {options.map((option, idx) => {
            return (
              <div
                key={idx}
                className={`optionItem ${
                  innerSelectedItem === option && "selected"
                }`}
                onClick={innerSelect}
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
