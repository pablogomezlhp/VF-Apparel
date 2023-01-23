/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useEffect, useRef } from "react";
import {
  SelectWrapper,
  SelectCurrent,
  SelectListWrapper,
  SelectListItem,
} from "./styles";

interface Props {
  options: string[];
  dropUp: boolean;
  small: boolean;
  value: string;
  onChange(value: string): void;
}

export const Select = ({
  options,
  onChange,
  value,
  small,
  dropUp = false,
}: Props) => {
  const node = useRef();

  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (e: unknown) => {
    // @ts-ignore
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  const handleChange = (selectedValue: string) => {
    onChange(selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <SelectWrapper ref={node} open={open} small={small} dropUp={dropUp}>
      <SelectCurrent open={open} small={small} onClick={() => setOpen(!open)}>
        {value}
      </SelectCurrent>

      {
        <SelectListWrapper>
          {open &&
            options
              .filter((opt) => opt !== value)
              .map((opt, index, arr) => (
                <SelectListItem
                  key={`select-item-${opt}`}
                  small={small}
                  last={index === arr.length - 1}
                  dropUp={dropUp}
                  onClick={() => handleChange(opt)}
                >
                  {opt}
                </SelectListItem>
              ))}
        </SelectListWrapper>
      }
    </SelectWrapper>
  );
};
