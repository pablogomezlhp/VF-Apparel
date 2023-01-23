import React from "react";
import { StyledQtyInfo } from "./styles";

interface QtyInfoProps {
    value: number;
  }

export function QtyInfo({ value }: QtyInfoProps) {
  return <StyledQtyInfo>{value}</StyledQtyInfo>;
}
