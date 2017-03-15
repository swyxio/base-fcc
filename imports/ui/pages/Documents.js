import React from 'react';
// import { Row, Col, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';

const Documents = () => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <DocumentsList />
      </Col>
    </Row>
  </div>
);

export default Documents;


        // <div className="page-header clearfix">
        //   <h4 className="pull-left">My Documents</h4>
        //   <Button
        //     bsStyle="success"
        //     className="pull-right"
        //     href="/documents/new"
        //   >New Document</Button>
        // </div>