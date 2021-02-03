import React from 'react';

import  { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';

import postService from "../service/postService"

import ListItem from "../component/partials/ListItem"
import Sidebar from "../component/partials/Sidebar"

const Building = (props) => {

    const [listItems, setListItems] = React.useState([]);
    const { t, i18n } = useTranslation();

    const [page, setCurrentPage] = React.useState(1);
    const [totalResults, setTotalResults] = React.useState(0);


    const editCallback = (id) =>{
        props.history.push("/building/edit/" + id)
    }

    const deleteCallback = (id) =>{
        confirmAlert({
            title: 'confirm.delete.title',
            message: 'confirm.delete.message',
            buttons: [
              { label: 'Yes', onClick: () => deleteItem(id)},
              { label: 'No' }
            ]
          });
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        setList([])
        getEventList(pageNumber)
    }

    return (
        <div>
            <Container className="charta-content-container">
                <Row>
                    <Col xs="0" sm="3" className="d-none d-lg-block">
                        <Sidebar></Sidebar>
                    </Col>
                    <Col xs="12" sm="9">
                        <div className="list-wrapper">
                            <AdminHeader addNewCallback={() => { addNewCallback() }} showAddButton="1" headerTitle="Events List"></AdminHeader>
                            {listItems && listItems.length > 0 ? listItems.map(function(listItem, idx){
                                return (
                                    <ListItem id={listItem.id} edit={editCallback} delete={deleteCallback} key={listItem.id} title={listItem.code}></ListItem>
                                )
                            }) : 'No Buildings Yet'}
                        </div>
                        <Pagination
                            activePage={page}
                            itemsCountPerPage={10}
                            totalItemsCount={totalResults}
                            pageRangeDisplayed={5}
                            onChange={handlePageChange.bind(this)}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );

}       

export default Building;