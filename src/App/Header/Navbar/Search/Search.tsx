import React, {
  useCallback,
  useEffect,
  useRef,
} from 'react'
import {
  useDispatch,
  useSelector,
} from 'react-redux'

import { useHistory } from 'react-router-dom'
import { State } from '../../../../store/reducers'
import { setSearchAction } from '../../../../store/search/actions'

function Search() {
  const search = useSelector((state: State) => state.search)
  const history = useHistory()
  const dispatch = useDispatch()
  const ref = useRef(null)

  const handleEnter = useCallback(() => {
    history.push('/')
  }, [history])

  const onChanged = useCallback(({detail}: CustomEvent<string>) => {
    dispatch(setSearchAction(detail))
  }, [dispatch])

  useEffect(() => {
    const input = ref.current as any
    input.addEventListener('valueChanged', onChanged)
    input.addEventListener('enterPressed', handleEnter)
  }, [ref, handleEnter, onChanged])

  return (
    <>
      <ui-search ref={ref} value={search} />
    </>
  )
}

export default Search
