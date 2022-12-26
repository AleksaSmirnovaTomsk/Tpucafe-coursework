import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function MenuItem({
  name, 
  description, 
  price, 
  image, 
  addToDish,
  deleteFromDish, 
  setItemCountInDish
}) {

    const [count, setCount] = useState(0);

    const runSelect = () => {
      addToDish()
      setCount(1);
    }

    const addCount = () => {
      setCount(count => count + 1)
    }

    const removeCount = () => {
      setCount(count => Math.max(count - 1, 0))
    }

    const deleteCount = () => {
      setCount(0)
    }

    useEffect(() => {
      if(count == 0) {
        deleteFromDish()
      } else {
        setItemCountInDish(count)
      }
    }, [count])

    return <div className="menu-elem">
        <img src={image} alt={name} />
        <div className="menu-elem-descr">
        <p>{name}</p> 
          {description}
        </div>
        <div>{price}</div>

        { count < 1 ? <Button onClick={runSelect} variant="success">
          Выбрать
        </Button> : <div className="d-flex flex-row align-items-center">
          <Button onClick={removeCount} variant="outline-dark">-</Button>
          <div className="ms-2 me-2">{count}</div>
          <Button onClick={addCount} variant="outline-dark">+</Button>
          <Button onClick={deleteCount} className="ms-2" variant="outline-danger">x</Button>
        </div>}

      </div>
}
