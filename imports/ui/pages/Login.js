import React from 'react';
// import { Link } from 'react-router';
// import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import handleLogin from '../../modules/login';

export default class Login extends React.Component {
  componentDidMount() {
    handleLogin({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <b>You are trying to access a secure part of the site. Please log in below to proceed.</b>
        <LoginButtons visible/>
      </div>
    );
  }
}



        // <Row>
        //   <Col xs={ 12 } sm={ 6 } md={ 4 }>
        //     <h4 className="page-header">Login</h4>
        //     <form
        //       ref={ form => (this.loginForm = form) }
        //       className="login"
        //       onSubmit={ this.handleSubmit }
        //     >
        //       <FormGroup>
        //         <ControlLabel>Email Address</ControlLabel>
        //         <FormControl
        //           type="email"
        //           ref="emailAddress"
        //           name="emailAddress"
        //           placeholder="Email Address"
        //         />
        //       </FormGroup>
        //       <FormGroup>
        //         <ControlLabel>
        //           <span className="pull-left">Password</span>
        //           <Link className="pull-right" to="/recover-password">Forgot Password?</Link>
        //         </ControlLabel>
        //         <FormControl
        //           type="password"
        //           ref="password"
        //           name="password"
        //           placeholder="Password"
        //         />
        //       </FormGroup>
        //       <Button type="submit" bsStyle="success">Login</Button>
        //     </form>
        //   </Col>
        // </Row>
