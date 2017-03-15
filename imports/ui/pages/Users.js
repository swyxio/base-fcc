import React from 'react';
// import { Row, Col, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';

const Users = ({ params }) => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <DocumentsList _id={ params._id }/>
      </Col>
    </Row>
  </div>
);

Users.propTypes = {
  params: React.PropTypes.object,
};

export default Users;


// import React from 'react';
// import DocumentEditor from '../components/DocumentEditor.js';

// const EditDocument = ({ doc }) => (
//   <div className="EditDocument">
//     <h4 className="page-header">Editing "{ doc.title }"</h4>
//     <DocumentEditor doc={ doc } />
//   </div>
// );

// EditDocument.propTypes = {
//   doc: React.PropTypes.object,
// };

// export default EditDocument;
