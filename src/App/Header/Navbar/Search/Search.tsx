import React from 'react'
import {
  useDispatch,
  useSelector
} from 'react-redux'

import UiSearch from '../../../../components/ui/Navbar/UiSearch/UiSearch'
import { useHistory } from 'react-router-dom'
import { State } from '../../../../store/reducers'
import { setSearchAction } from '../../../../store/search/actions'

function Search() {
  const search = useSelector((state: State) => state.search)
  const history = useHistory()
  const dispatch = useDispatch()

  function handleEnter() {
    history.push('/')
  }

  function onChanged(search: string) {
    dispatch(setSearchAction(search))
  }

  return (
    <UiSearch value={search} onChanged={onChanged} onEnter={handleEnter}/>
  )
}

export default Search
