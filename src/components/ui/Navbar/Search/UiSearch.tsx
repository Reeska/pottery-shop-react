import React, { KeyboardEvent } from "react";
import './UiSearch.scss';

export interface UiSearchProps {
  onChanged?: (value: string) => void;
}

function UiSearch (props: UiSearchProps) {
  function handleKeypress (event: KeyboardEvent<HTMLInputElement>) {
    props.onChanged?.(event.currentTarget.value);
  }

  return (
      <span className="search">
        <input className="input" placeholder="Search" onKeyUp={handleKeypress}/>
      </span>
  )
}

export default UiSearch;
