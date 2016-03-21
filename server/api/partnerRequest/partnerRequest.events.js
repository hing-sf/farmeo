/**
 * PartnerRequest model events
 */

'use strict';

import {EventEmitter} from 'events';
var PartnerRequest = require('./partnerRequest.model');
var PartnerRequestEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PartnerRequestEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  PartnerRequest.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PartnerRequestEvents.emit(event + ':' + doc._id, doc);
    PartnerRequestEvents.emit(event, doc);
  }
}

export default PartnerRequestEvents;
