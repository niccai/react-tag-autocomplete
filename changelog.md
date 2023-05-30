# Changelog

## v7.0.0

Breaking changes:

- Renamed `autoresize` prop to `allowResize`
- Renamed `delimiters` prop to `delimiterKeys`
- Renamed `noSuggestionsText` to `noOptionsText`
- Renamed `onAddition` prop to `onAdd`
- Renamed `removeButtonText` to `deleteButtonText`
- Renamed `suggestionComponent` to `renderOption`
- Renamed `tags` prop to `selected`
- Renamed `tagComponent` to `renderTag`
- Removed `addOnBlur` prop, can be implemented manually
- Removed `inputAttributes` prop, use `renderInput` prop instead
- Removed `maxSuggestionsLength` prop, use `suggestionsTransform` prop instead
- Removed `minQueryLength` prop
- Removed `suggestionsFilter` prop, use `suggestionsTransform` prop instead

New features and improvements:

- Added `onExpand` and `onCollapse` callbacks
- Added a label sub component to improve accessibility
- Added assistive text notifications for changes to selected tags
- Added support for more combobox keyboard behavior to match the ARIA spec
- Added support for displaying the selected state of options in the listbox
- Added support for scrolling the listbox and maintaining the the active option in view
- Added support for interpolating values with text props
- Added support for displaying disabled state using `isDisabled` prop
- Added support for displaying invalid state using `isInvalid` prop
- Added support for related descriptive text using `ariaDescribedBy` prop
- Added support for related error status text using `ariaErrorMessage` prop
- Added support for controlling the listbox when selecting a tag using `collapseOnSelect` prop
- Added support for activating the first option when the listbox expands using `activateFirstOption` prop
- Added support for rendering a custom root component using `renderRoot`  prop
- Added support for rendering a custom label component using `renderLabel`  prop
- Added support for rendering a custom input component using `renderInput`  prop

Other changes:

- When the `allowNew` prop is enabled a new tag can _only_ be created when selecting the new tag option from the listbox.
- Tags can no longer be selected multiple times. Choosing a previously selected tag will now trigger a deletion.

Please refer to [the migration guide](migration-guide.md) if upgrading from v6 to v7.

## Older versions

Please refer to [the changelog in the old project repository](https://github.com/i-like-robots/react-tags/blob/main/CHANGELOG.md).