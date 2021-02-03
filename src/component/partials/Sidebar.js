import React, { Component, useEffect } from 'react';

import {faHome, faBuilding} from "@fortawesome/free-solid-svg-icons";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { Nav, NavLink} from 'reactstrap';

import { useTranslation, withTranslation, Trans } from 'react-i18next';


useEffect(() => {

}, []);

const Sidebar = (props) = {

    const { t, i18n } = useTranslation();

    return (
        <div className="sidebar">
            <Nav vertical>
                <div>
                    <h6>
                        <FontAwesomeIcon icon={faBuilding} />
                        <NavLink key="building_link" href="/building"><span className="sidebar-icon"></span><span className="sidebar-label">{ t('sidebar.building') }</span></NavLink>
                    </h6>
                </div>    
            </Nav>
        </div>
    )

}

export default Sidebar