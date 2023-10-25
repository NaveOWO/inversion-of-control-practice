import "./style.css";

interface CustomHookedSelectProps {
  options: string[];
  selectedItem: string | null;
  open: boolean;
  toggleBox: () => void;
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function CustomHookedSelect(props: CustomHookedSelectProps) {
  const { options, selectedItem, open, toggleBox, handleClick } = props;

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
                onClick={handleClick}
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
