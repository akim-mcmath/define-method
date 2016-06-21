'use strict';

function defineMethod(ctor, prop, method) {
  Object.defineProperty(ctor.prototype, prop, {
    configurable: true,
    writable: true,
    value: method
  });
}

module.exports = defineMethod;
