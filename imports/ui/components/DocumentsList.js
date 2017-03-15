import React from 'react';
import { ListGroup, ListGroupItem, Alert, Button } from 'react-bootstrap';

const DocumentsList = ({ documents, userName }) => (
  <div>
    <div className="page-header clearfix">
      <h4 className="pull-left">{ userName } Documents</h4>
      <Button
        bsStyle="success"
        className="pull-right"
        href="/documents/new"
      >New Document</Button>
    </div>
    { documents.length > 0 ? <ListGroup className="DocumentsList">
      {documents.map(({ _id, title }) => (
        userName === 'My' ?
        <ListGroupItem key={ _id } href={`/documents/${_id}`}>{ title }
        </ListGroupItem> :
        <ListGroupItem key={ _id }>{ title }
        </ListGroupItem>
      ))}
    </ListGroup> :
    <Alert bsStyle="warning">No documents yet.</Alert> }
  </div>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
  userName: React.PropTypes.string,
};

export default DocumentsList;

        // <i> by </i>{ Object.prototype.hasOwnProperty.call(userobject.profile.name, 'first') ?
        // `${userobject.profile.name.first} ${userobject.profile.name.last}`
        // : `${userobject.profile.name}` }