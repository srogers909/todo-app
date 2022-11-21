export interface IItem {
  id?: number
  value?: string
  sortOrder?: number
  onAddButtonClick?(value): any
  onDeleteButtonClick?(value): any
}

export interface IInputField {
  value?: string
}