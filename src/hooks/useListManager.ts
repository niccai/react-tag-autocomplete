import { useEffect, useMemo, useReducer } from 'react'
import { listReducer, ListReducerActions } from '../reducers/listReducer'
import type { ListReducerState } from '../reducers/listReducer'
import type { TagSuggestion } from '../sharedTypes'

export type UseListManagerActions = {
  clearAll(): void
  clearSelectedIndex(): void
  selectedIndexNext(): void
  selectedIndexPrev(): void
  updateSuggestions(suggestions: TagSuggestion[]): void
  updateValue(value: string): void
}

export type UseListManagerState = ListReducerState & UseListManagerActions

export function useListManager(initialState: ListReducerState): UseListManagerState {
  const [state, dispatch] = useReducer(listReducer, initialState)

  // TODO: use a ref
  const actions: UseListManagerActions = useMemo(() => {
    return {
      clearAll() {
        dispatch({ type: ListReducerActions.ClearAll })
      },
      clearSelectedIndex() {
        dispatch({ type: ListReducerActions.ClearSelectedIndex })
      },
      selectedIndexNext() {
        dispatch({ type: ListReducerActions.SelectedIndexNext })
      },
      selectedIndexPrev() {
        dispatch({ type: ListReducerActions.SelectedIndexPrev })
      },
      updateSuggestions(suggestions: TagSuggestion[]) {
        dispatch({ type: ListReducerActions.UpdateSuggestions, payload: suggestions })
      },
      updateValue(value: string) {
        dispatch({ type: ListReducerActions.UpdateValue, payload: value })
      },
    }
  }, [])

  useEffect(
    () => actions.updateSuggestions(initialState.suggestions),
    [actions, initialState.suggestions]
  )

  return Object.assign(state, actions)
}