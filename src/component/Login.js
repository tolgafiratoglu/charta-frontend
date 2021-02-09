import React from 'react';

import  { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';

import postService from "../service/postService"

const Login = (props) => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const submitLogin = async () => {
        // Call asyncron post service:
        return await postService("login", {"username": username, "password": password}, false).then(
            (response) => {
                if(response.status === "success"){
                    const responseData = response.data 
                    localStorage.setItem('jwtToken', responseData.access)
                    localStorage.setItem('refreshToken', responseData.refresh)
                    props.history.push("/dashboard")
                }else{

                }
            }
        )
    }

    return (
        <div>
            <Container className="charta-content-container">
                <Row>
                    <Col xs="12" sm="12">
                        <div className="charta-content-canvas charta-content-wrapped-boxed">
                            <Form>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label for="username" className="mr-sm-2 mt-sm-1">Username</Label>
                                    <Input type="username" name="username" id="login_username" placeholder="Username"
                                           onChange={e => setUsername(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label for="password" className="mr-sm-2 mt-sm-1">Password</Label>
                                    <Input type="password" name="password" id="login_password" placeholder=""
                                           onChange={e => setPassword(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-sm-3">
                                    <Button onClick={()=>{submitLogin()}}>
                                        Sign In
                                    </Button>
                                </FormGroup>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}       

export default Login;