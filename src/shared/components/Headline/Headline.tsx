import React from "react";
import { Styled } from "./Headline.styles";

/* ==============================================
 * Types and Interfaces
 * ============================================== */
type HeadlineTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HTMLElement = keyof React.ReactHTML;

export interface HeadlineProps {
  headingLevel: HTMLElement & HeadlineTags;
  headingText: string;
}

const Headline: React.FunctionComponent<HeadlineProps> = ({
  headingLevel,
  headingText,
}: HeadlineProps) => {
  const Element = Styled.Headline;
  return <Element as={headingLevel}>{headingText}</Element>;
};

export default Headline;
