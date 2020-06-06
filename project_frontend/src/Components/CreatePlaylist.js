import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal';
import './CreatePlaylist.css';
import InputCreate from './InputCreate'
import ReactDOM from 'react-dom';
var check
const $ = window.$;

const CreatePlaylist = (props) => { 





    
    return(
        
        <div classname="wrap" id="hide">
        <Modal show={props.modalOpen} onHide={props.handleModalOpen}  dialogClassName="custom-modal" id="mod" aria-labelledby="contained-modal-title-vcenter">
        
        <InputCreate></InputCreate>
           
           </Modal>
           </div>
          
     
    )
};
export default CreatePlaylist;