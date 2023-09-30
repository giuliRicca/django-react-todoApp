import React, {useState, useEffect} from 'react'
import {Modal as BsModal, Button, Form} from 'react-bootstrap'
import { checkItem } from '../utils'

const Modal = ({show, toggle, current, onSave}) => {
    const [item, setItem] = useState(current)

    useEffect(()=>{
      setItem(current);
    }, [current])
    
    const handleChange = (e) => {
      let name = e.target.name;
      let value = (e.target.type === 'checkbox') ? e.target.checked :  e.target.value;
      const newItem = {...item, [name]:value}
      setItem(newItem)
    } 

    const handleSubmit = () => {
      if(checkItem(item)) return onSave(item);
      alert("Error!")
    }
    
    return (
        <BsModal show={show}>
        <BsModal.Header closeButton>
          <BsModal.Title>New Task</BsModal.Title>
        </BsModal.Header>
        <BsModal.Body>
            {/* New Task Form */}
            <Form >
              <Form.Group>
                  <Form.Control 
                  value={item.title} 
                  type="text" placeholder="Title" 
                  name='title'
                  onChange={handleChange}
                  />
              </Form.Group>
              <Form.Group className="mt-3">
                  <Form.Check type="checkbox" label="Completed"
                    name='completed'
                    checked={item.completed}
                    onChange={handleChange}
                  />
              </Form.Group>
            </Form>
        </BsModal.Body>
        <BsModal.Footer>
          <Button variant="secondary" onClick={toggle}>
            Close
          </Button>
          <Button 
          variant="primary"
          onClick={handleSubmit}>
            Save
          </Button>
        </BsModal.Footer>
      </BsModal>
    )
}

export default Modal
