import { PropsWithChildren } from "react";
import "./style.css";

function Select({ children }: PropsWithChildren<any>) {
  return <section className="container">{children}</section>;
}

function Trigger({ toggleBox }: any) {
  return (
    <button className="openButton" onClick={toggleBox}>
      open!
    </button>
  );
}

function Option({ item, selectedItem, select }: any) {
  return (
    <div
      className={`optionItem ${selectedItem === item && "selected"}`}
      onClick={select}
    >
      {item}
    </div>
  );
}

export const PropsGetteredSelect = Object.assign(Select, {
  Trigger,
  Option,
});
