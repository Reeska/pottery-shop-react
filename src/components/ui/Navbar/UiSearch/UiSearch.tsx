import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
} from 'react'
import './UiSearch.scss'

export interface UiSearchProps {
  value: string;
  onChanged: (value: string) => void;
  onEnter: (value: string) => void;
}

const ENTER_KEYCODE = 13

function UiSearch({value, onEnter, onChanged}: UiSearchProps) {
  const handleEnter = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === ENTER_KEYCODE) {
      onEnter(event.currentTarget.value)
    }
  }, [onEnter])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => onChanged(event.currentTarget.value)

  return (
    <span className="search">
      <input className="input" value={value} placeholder="Search" onKeyUp={handleEnter} onChange={onChange}/>
    </span>
  )
}

export default UiSearch
