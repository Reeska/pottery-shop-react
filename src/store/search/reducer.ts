import {
  SearchAction,
  SET_SEARCH,
} from './actions'

export type SearchState = string

export const initialSearchState = ''

export function searchReducer(state: SearchState = initialSearchState, action: SearchAction): SearchState {
  switch (action.type) {
    case SET_SEARCH:
      return action.value
    default:
      return state
  }
}
