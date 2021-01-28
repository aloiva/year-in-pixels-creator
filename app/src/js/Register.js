import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaUser, FaLock } from 'react-icons/fa';

import '../css/Form.css';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            username: "",
            password: "",
            confirmPassword: "",
            validated: false
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeConfirmPassword(e) {
        this.setState({
            confirmPassword: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        let form = e.currentTarget;

        if(this.state.password !== this.state.confirmPassword) {
            return;
        }

        this.setState({
            validated: true
        });

        if(form.checkValidity() === true) {
            console.log("Valid form!");
        }
    }

    render() {
        return (
            <Container className="mt-3 form">
                <Card className="bg-light">
                    <Card.Header>
                        <h3 className="text-center">Register New Account</h3>
                    </Card.Header>
                    <Card.Body className="form-body mx-auto">
                        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <FaUser></FaUser>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="First Name"
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.onChangeName}
                                    />
                                </InputGroup>
                                <small class="form-text text-muted">You may leave this blank.</small>
                            </Form.Group>

                            <Form.Group>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <FaUser></FaUser>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Username"
                                        type="text"
                                        required
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                    />

                                    <FormControl.Feedback type="invalid">
                                        Please choose a username.
                                    </FormControl.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <br></br>

                            <Form.Group>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <FaLock></FaLock>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Password"
                                        type="password"
                                        required
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                    />

                                    <FormControl.Feedback type="invalid">
                                        Please choose a password.
                                    </FormControl.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <FaLock></FaLock>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Confirm Password"
                                        type="password"
                                        required
                                        isInvalid={this.state.password !== this.state.confirmPassword}
                                        value={this.state.confirmPassword}
                                        onChange={this.onChangeConfirmPassword}
                                    />

                                    <FormControl.Feedback type="invalid">
                                        Passwords not entered / do not match.
                                    </FormControl.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <br></br>
                            <Button variant="primary" type="submit" block>
                                Submit
                            </Button>
                        </Form>

                        <p class="mt-3 text-center">Have an account? <a href="/login">Log In</a> </p>            
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}