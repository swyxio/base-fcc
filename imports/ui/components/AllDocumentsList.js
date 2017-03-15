import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <ListGroup className="DocumentsList">
    {documents.map(({ _id, title, profile }) => (
      <ListGroupItem key={ _id } >{ title } 
        <i> { Object.prototype.hasOwnProperty.call(profile.name, 'first') ? `by ${profile.name.first} ${profile.name.last}` : `by ${profile.name}` } </i>
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No documents yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default DocumentsList;
