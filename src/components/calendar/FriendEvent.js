import React, { useState } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
function FriendEvnet({ isOpen, onClose, onEventAdded }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  
  const onSubmit = (event) => {
    event.preventDefault();
    onEventAdded({
      title,
      start,
      end,
    });
    onClose();
  };

  const onCancel = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <Datetime value={start} onChange={(date) => setStart(date._d)} />
        </div>
        <div>
          <Datetime value={end} onChange={(date) => setEnd(date._d)} />
        </div>
        <button>Add event</button>
      </form>
      <div></div>
      <div>
        <button onClick={() => onCancel()}>Close</button>
      </div>
    </Modal>
  );
}
export { FriendEvnet };
