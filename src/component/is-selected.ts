const SELECTED = {
  selected: 'selected'
}

const isSelected = (item: any, selectedItem: any) =>
  item === selectedItem ? SELECTED : {}

export default isSelected
