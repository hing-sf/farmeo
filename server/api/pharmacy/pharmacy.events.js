/**
 * Pharmacy model events
 */

'use strict';

import {EventEmitter} from 'events';
var Pharmacy = require('./pharmacy.model');
var PharmacyEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PharmacyEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Pharmacy.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PharmacyEvents.emit(event + ':' + doc._id, doc);
    PharmacyEvents.emit(event, doc);
  }
}

export default PharmacyEvents;
