import React, { KeyboardEvent } from 'react';
import './UiSearch.scss';

export interface UiSearchProps {
  onChanged?: (value: string) => void;
  onEnter?: (value: string) => void;
}

const ENTER_KEYCODE = 13;

function UiSearch (props: UiSearchProps) {
  function handleKeypress (event: KeyboardEvent<HTMLInputElement>) {
    const searchValue = event.currentTarget.value;
    if (event.keyCode === ENTER_KEYCODE) {
      props.onEnter?.(searchValue);
    } else {
      props.onChanged?.(searchValue);
    }
  }

  return (
      <span className="search">
        <input className="input" placeholder="Search" onKeyUp={handleKeypress}/>
      </span>
  );
}

export default UiSearch;
