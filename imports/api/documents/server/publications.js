import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Documents from '../documents';

Meteor.publish('documents.list', function docPub() { return Documents.find({ownedBy: this.userId}) });

Meteor.publish('documents.view', function docPub(_id) {
  check(_id, String);
  return Documents.find({_id: _id, ownedBy: this.userId});
});
