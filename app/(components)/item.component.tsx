import { IItem } from "../(logic)/interfaces";

export default function Item(props: IItem) {
  let itemValue: string = ''

  const valueChangeHandler = event => { itemValue = event.target.value; return itemValue }
  const addButtonClickHandler = () => props.onAddButtonClick(itemValue)
  const deleteButtonClickHandler = () => props.onDeleteButtonClick(props.id)

  function handleRender(): any {
    let markup = null;

    if (props.value) {
      markup = (
        <>
          <div className="existing-item col-10">{props.value}</div>
          <button className="col-2 btn btn-danger" type="button" onClick={deleteButtonClickHandler}>Delete</button>
        </>
      )
    } else {
      markup = (
        <>
          <div className="input-group">
            <input className="form-control col-10" placeholder="Add Item" type="text" 
              id={props.id && String(props.id)} value={props.value} onChange={valueChangeHandler}></input>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={addButtonClickHandler}>Add</button>
            </div>  
          </div>        
        </>
      )
    }

    return markup;
  }

  return (  
    <div className="item-container">
      {handleRender()}
    </div>
  )
}