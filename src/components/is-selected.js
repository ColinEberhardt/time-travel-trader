const SELECTED = {
  selected: 'selected'
}

const isSelected = (item, selectedItem) =>
  item === selectedItem ? SELECTED : {}

export default isSelected
