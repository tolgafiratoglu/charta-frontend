import {Button, Col, Container, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClone, faThumbsUp, faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import {faEdit, faSpinner, faImage, faKey} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {text} from "@fortawesome/fontawesome-svg-core";

import { useTranslation, withTranslation, Trans } from 'react-i18next';

const ListItem = (props) => {

    const { t, i18n } = useTranslation();

    const [hidden, setHidden] = React.useState(false);

    const id = props.id
    const title = props.title
    const subTitle = props.subTitle
    const subContent = props.subContent

    const updateButtonVisibility = props.updateButtonVisibility
    const deleteButtonVisibility = props.deleteButtonVisibility

    return(!hidden ? <Container key={id} className="list-container">
               <ToastContainer />
               <Row>
                    <Col className="col-md-6">
                        <div>
                            <span className="font-weight-bold">{title} {subContent ? '(' + subContent + ')' : ''}</span>
                        </div>
                    </Col>
                    <Col className="list-buttons col-md-6">
                        {deleteButtonVisibility == "1" ? <Button onClick={()=>{props.delete(id)}} color="warning"><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> { t('commons.delete') }</Button> : ''}
                        {updateButtonVisibility == "1" ? <Button onClick={()=>{props.edit(id)}} color="info"><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> { t('commons.edit') }</Button> : ''}
                    </Col>
               </Row>
               { subTitle ? <Row><Col className="col-md-9"><div>{subTitle}</div></Col></Row> : '' }
          </Container> : '')

}

export default ListItem;