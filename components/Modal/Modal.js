import React,{useState,useEffect}from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Gallery from '../Gallery/Gallery';


export default function Modale({lieu,buttonClassName}) {

    const [isOpen,setIsopen] =  useState(false)

    const toggle = ()=>setIsopen(!isOpen)
    return (
        <div>
             <Button className={buttonClassName} onClick={toggle}>click</Button>
      <Modal isOpen={isOpen} toggle={toggle} >
    <ModalHeader toggle={toggle}>{lieu.nom}</ModalHeader>
        <ModalBody>
            <Gallery photos={lieu.photos} />
        </ModalBody>
        <ModalFooter>
    <p>{lieu.description || lieu.nom}</p>
    <p>{ lieu.localisation || 'Burkina Faso' }</p>
          <Button color="secondary" onClick={toggle}>Fermer</Button>
        </ModalFooter>
      </Modal>
        </div>
    )
}
