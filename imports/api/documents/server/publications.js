import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Documents from '../documents';

const _ = require('lodash');

// Meteor.publish('documents.list', function docPub() { return Documents.find({ownedBy: this.userId}) });
Meteor.publish('documents.list', function docPub(_id) {
  check(_id, String);
  // console.log('doc.list', _id);
  // return Documents.find({ ownedBy: _id });
  const documentCursor = Documents.find({ ownedBy: _id });
  const profileCursor = Meteor.users.find(
    {
      _id,
    },
    {
      fields: { profile: 1 },
    });
  return [documentCursor, profileCursor];
});

// just handover raw data and modify clientside - SO way
Meteor.publish('documents.listAll', function() {
  const documentCursor = Documents.find({});
  const ownerIds = documentCursor.map(function(d) {
    return d.ownedBy;
  });
  const uniqueOwnerIds = _.uniq(ownerIds);
  const profileCursor = Meteor.users.find(
    {
      _id: { $in: uniqueOwnerIds },
    },
    {
      fields: { profile: 1 },
    });
  return [documentCursor, profileCursor];
});


Meteor.publish('documents.view', function docPub(_id) {
  check(_id, String);
  return Documents.find({ _id, ownedBy: this.userId });
});

// // try to modify inside here - meteorchef way
// Meteor.publish('documents.listAll', function docPub() { 
//   const cursor = Documents.find({});
//   console.log('cursor',cursor);
//   const DocsWithUserObject = cursor ? cursor.map((doc) => {
//     const userobject = Meteor.users.findOne({ _id: doc.ownedBy });
//     const doc2 = doc;
//     if (userobject) {
//       doc2.userobject = userobject.profile;
//     }
//     return doc2;
//     // else {
//     //   return this.ready();
//     // }
//   }) : cursor;
//   return DocsWithUserObject;
// });

// Meteor.publish('documents.listAll', function docPub() { 
//    let cursor = Documents.find({});
//    let DocsWithUserObject = cursor.map((doc) => {
//      const userobject = Meteor.users.findOne({ _id: doc.ownedBy });
//      if (userobject) {
//        doc.userobject = userobject.profile;
//        return doc
//      }
//    });
//    console.log('DocsWithUserObject',DocsWithUserObject); 
//   return DocsWithUserObject;
// })