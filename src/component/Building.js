import React, {useEffect} from 'react';

import  { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';

import getService from "../service/getService"
import deleteService from "../service/deleteService"
import HttpService from "../service/httpService"

import ListItem from "../component/partials/ListItem"
import Sidebar from "../component/partials/Sidebar"

import { confirmAlert } from 'react-confirm-alert';

import { useTranslation, withTranslation, Trans } from 'react-i18next';

import Pagination from "react-bootstrap-4-pagination";

import config from "../config/system";

const Building = (props) => {

    const [listItems, setListItems] = React.useState([]);
    const [error, setError] = React.useState("");
    const { t, i18n } = useTranslation();

    const [page, setCurrentPage] = React.useState(1);
    const [totalResults, setTotalResults] = React.useState(0);

    useEffect(() => {
        getBuildingList(1)
    }, []);

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

    const pageChanged = (pageNumber) => {
        setCurrentPage(pageNumber)
        setListItems([])
        getBuildingList(pageNumber)
    }

    const getBuildingList = (currentPage) => {

        var pagination = config.get("pagination.building")
        var offset = (page - 1) * pagination
        var getRequest = "offset=" + offset

        getService("building_list", getRequest, true).then(
            (response) => {
                if(response.status === "success"){
                    setListItems(response.data.data)
                    setTotalResults(response.data.totalResults)
                }else{
                    HttpService.redirectToLogin(props.history)
                }
            }
        )
           
    }

    const deleteItem = (id) =>{
        deleteService("building", id).then(
            (response) => {
                if(response.data.status == 'success'){
                    getBuildingList(1);
                }
            }
        )
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
                            {error != "" && <Alert color="warning">{error}</Alert>}
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
                            onChange={pageChanged.bind(this)}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );

}       

export default Building;