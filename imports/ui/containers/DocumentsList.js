import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Documents from '../../api/documents/documents.js';
import DocumentsList from '../components/DocumentsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const myid = params._id ? params._id : Meteor.userId();
  const subscription = Meteor.subscribe('documents.list', myid);
  if (subscription.ready()) {
    const userData = Meteor.users.findOne({ _id: myid });
    let userName;
    if (params._id) {
      userName = Object.prototype.hasOwnProperty.call(userData.profile.name, 'first') ? `${userData.profile.name.first}'s` : userData.profile.name;
    } else {
      userName = 'My';
    }
    let documents = Documents.find().fetch();
    documents = documents.map((x) => {
      const userobject = Meteor.users.findOne({ _id: x.ownedBy });
      const x2 = x;
      if (userobject) {
        x2.userobject = userobject;
      }
      return x2;
    });
    // console.log('AllDocuments.js users', Meteor.users.find({}).fetch());
    onData(null, { documents, userName });
  }
};

export default composeWithTracker(composer, Loading)(DocumentsList);


// const composer = (params, onData) => {
//   const subscription = Meteor.subscribe('documents.list');
//   if (subscription.ready()) {
//     const documents = Documents.find().fetch();
//     console.log('DocumentsList.js', documents);
//     onData(null, { documents });
//   }
// };