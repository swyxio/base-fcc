import React from 'react';
import { Row, Col, Button, Jumbotron } from 'react-bootstrap';
// import { Row, Col, Button } from 'react-bootstrap';
import AllDocuments from '../containers/AllDocuments.js';

const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>Base+FCC</h2>
      <p>A starting point for building <a href="http://freecodecamp.com/" target="_blank">FreeCodeCamp</a> projects with Meteor.</p>
      <p><a className="btn btn-success" href="https://themeteorchef.com/base" role="button">Read the Documentation for Base</a></p>
      <p style={ { fontSize: '16px', color: '#aaa' } }>Forked from gstephen's <a href="https://github.com/rgstephens/base/tree/extendDoc" target="_blank">MeteorChef/Base Restricted Access Branch</a> at v4.10.0</p>
      <ul style={ { 'textAlign': 'left' } }> <b>Features:</b>
        <li>Twitter login</li>
        <li>Unauthenticated view of all documents (without Editing ability although the API may be hackable)</li>
        <li>My Documents page</li>
      </ul>
      <p>This code is published on github at <a href="https://github.com/sw-yx/base-fcc" target="_blank">https://github.com/sw-yx/base-fcc</a> and a sample is hosted on heroku at <a href="https://base-fcc.herokuapp.com/" target="_blank">https://base-fcc.herokuapp.com/</a></p>
    </Jumbotron>

    <div className="Documents">
      <Row>
        <Col xs={ 12 }>
          <div className="page-header clearfix">
            <h4 className="pull-left">Documents</h4>
            <Button
              bsStyle="success"
              className="pull-right"
              href="/documents/new"
            >New Document</Button>
          </div>
          <AllDocuments />
        </Col>
      </Row>
    </div>
  </div>
);

export default Index;



// import React from 'react';

// const Documents = () => (
// );

// export default Documents;
