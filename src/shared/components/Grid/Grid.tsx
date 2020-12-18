import React from "react";

type GridAlignItems =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";

type GridJustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

type GridColSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridProps {
  row?: boolean;
  column?: boolean;
  expanded?: boolean;
  alignItems?: GridAlignItems;
  justify?: GridJustifyContent;
  lg?: GridColSizes;
  md?: GridColSizes;
  sm?: GridColSizes;
  children?: JSX.Element[] | JSX.Element;
}

const Grid: React.FunctionComponent<GridProps> = ({
  row,
  column,
  alignItems,
  justify,
  lg,
  md,
  sm,
  children,
}: GridProps) => {
  return <div>{children}</div>;
};

export default Grid;
