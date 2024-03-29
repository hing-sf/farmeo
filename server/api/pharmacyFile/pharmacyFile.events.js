/**
 * PharmacyFile model events
 */

'use strict';

import {EventEmitter} from 'events';
var PharmacyFile = require('./pharmacyFile.model');
var PharmacyFileEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PharmacyFileEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  PharmacyFile.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PharmacyFileEvents.emit(event + ':' + doc._id, doc);
    PharmacyFileEvents.emit(event, doc);
  }
}

export default PharmacyFileEvents;
