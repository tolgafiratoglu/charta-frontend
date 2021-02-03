import React from 'react';

import  { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';

import postService from "../service/postService"

const Building = (props) => {

    const [listItems, setListItems] = React.useState([]);

    const editCallback = (id) =>{
        props.history.push("/building/edit/" + id)
    }

    return (
        <div>
            <Container className="charta-content-container">
                <Row>
                    <Col xs="0" sm="3" className="d-none d-lg-block">
                        <Sidebar></Sidebar>
                    </Col>
                    <Col xs="12" sm="9">
                    {listItems && listItems.length > 0 ? listItems.map(function(listItem, idx){
                        return (
                            <ListItem id={listItem.id} edit={editCallback} delete={deleteCallback} key={listItem.id} title={listItem.code}></ListItem>
                        )
                       }) : 'No Buildings Yet'}
                    </Col>
                </Row>
            </Container>
        </div>
    );

}       

export default Login;