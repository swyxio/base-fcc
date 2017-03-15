import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Documents from '../../api/documents/documents.js';
import DocumentsList from '../components/AllDocumentsList.js';
import Loading from '../components/Loading.js';

// just handover raw data and modify clientside - SO way
const composer = (params, onData) => {
  const subscription = Meteor.subscribe('documents.listAll');
  if (subscription.ready()) {
    let documents = Documents.find().fetch();
    documents = documents.map((x) => {
      const userobject = Meteor.users.findOne({ _id: x.ownedBy });
      const x2 = x;
      if (userobject) {
        // console.log('userobject', userobject);
        x2.userobject = userobject;
      }
      return x2;
    });
    // console.log('AllDocuments.js', documents);
    // console.log('AllDocuments.js users', Meteor.users.find({}).fetch());
    onData(null, { documents });
  }
};

// // try to modify inside here - meteorchef way
// const composer = (params, onData) => {
//   const subscription = Meteor.subscribe('documents.listAll');
//   if (subscription.ready()) {
//     const documents = Documents.find().fetch();
//     console.log('AllDocuments.js', documents);
//     onData(null, { documents });
//   }
// };

export default composeWithTracker(composer, Loading)(DocumentsList);
