import {FC} from "react";
import '../css/section.css';
import "../types/section";
import { SectionProps } from "../types/section";

export const Section: FC<SectionProps> = ({headline, secondary,children})=> {
  return (
    <>
      <section className={"section " + (secondary ? "section-secondary" : "")} >
        <h1 className="section-headline">{headline}</h1>
        {children}
      </section>
    </>
  );
}

export default Section;
