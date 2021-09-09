import React,{useState} from "react";
import Modal from "react-modal"
function RemoveEventModal( {isOpen,onClose,onRemove} ){
  const onCancel=()=>{
    onClose();
    }

  const onSubmit=(e)=>{
    e.preventDefault();
    onRemove();
    }

    return(
      <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
        <form onSubmit={onCancel}>
          <label>삭제하시겠습니까?</label>
          <button onClick={()=>onCancel()}>close</button>
        </form>
        <form onSubmit={onSubmit}>
          <button>삭제</button>
        </form>
      </Modal>
  );
}
export { RemoveEventModal }
