import type { HTMLAttributes } from 'react'
import type { TagOption, TagSelected } from '../sharedTypes'
import type { UseListManagerState } from './useListManager'

export type UseOptionsProps = {
  id: string
  selectTag: (tag: TagSelected) => boolean
}

export type UseOptionsState = Array<{ optionProps: HTMLAttributes<HTMLElement> } & TagOption>

export function useOptions(
  manager: UseListManagerState,
  { id, selectTag }: UseOptionsProps
): UseOptionsState {
  return manager.results.map((result, index) => {
    const disabled = result.disabled ?? false
    const focused = index === manager.selectedIndex
    const selected = index === manager.selectedIndex
    // const selected = result.selected ?? false

    const args = { disabled, focused, index, inputValue: manager.value, selected }
    const label = result.transformLabel?.(args) || result.label
    const value = result.transformValue?.(args) || result.value

    const optionProps: HTMLAttributes<HTMLElement> = {
      'aria-disabled': disabled,
      'aria-posinset': index + 1,
      'aria-selected': selected,
      'aria-setsize': manager.results.length,
      id: `${id}-listbox-${index}`,
      role: 'option',
      // TODO
      onMouseDown() {
        selectTag(result)
      },
    }

    return {
      index,
      disabled,
      focused,
      selected,
      label,
      optionProps,
      value,
    }
  })
}