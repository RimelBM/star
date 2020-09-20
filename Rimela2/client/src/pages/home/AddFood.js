import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addFood } from '../../actions/foodAction';


const AddFood = ({ isAuthenticated, addFood }) => {
  const [modal, setModal] = useState(false);

  
  
  const handleToggle = () => setModal(!modal);
  
  const[description,setDescription] = useState('') ; 
  const[picture,setPicture] = useState('null')
  
  

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("description" , description) ;
    formData.append("picture",picture)
  
    addFood(formData);
    // Close modal
    handleToggle();
  };
 
  return (
    <div style={{paddingLeft:'30px' , paddingRight:'30px'}}>

      {isAuthenticated ? (
        <Button
          outline color="success"
          style={{ marginBottom: '2rem' }}
          onClick={handleToggle}
          style={{width:"100%" , marginTop :"20px" ,marginBottom:'50px' }}
        >
          Add Food
        </Button>
      ) : (
        <h4 ></h4>
      )}



      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Add To Foods List</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleOnSubmit}>
            <FormGroup>
              <Label for="item">food</Label>
              
              <Input
                type="description"
                name="description"
                id="description"
                placeholder="Add desc of food"
                onChange={e=>setDescription(e.target.value)}
              />
              <input accept="image/*" name="picture" onChange={e=>setPicture(e.target.files[0])} id="picture" type="file" />



              <Button outline color="success" style={{ marginTop: '2rem' }} block >
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  item: state.food,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addFood })(AddFood);