// Copyright (C) 2018 Amal Hussein. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Throws a RangeError if value of index arg is out of range
info: |
  Atomics.wait( typedArray, index, value, timeout )

  2.Let i be ? ValidateAtomicAccess(typedArray, index).
    ...
    2.Let accessIndex be ? ToIndex(requestIndex).
    ...
    5. If accessIndex ≥ length, throw a RangeError exception.
features: [ Atomics, SharedArrayBuffer, TypedArray ]
---*/

var int32Array = new Int32Array(new SharedArrayBuffer(1024));
var poisoned = {
  valueOf: function() {
    throw new Test262Error("should not evaluate this code");
  }
};

assert.throws(RangeError, () => Atomics.wait(int32Array, Infinity, poisoned, poisoned));
assert.throws(RangeError, () => Atomics.wait(int32Array, int32Array.length + 1, poisoned, poisoned));
assert.throws(RangeError, () => Atomics.wait(int32Array, int32Array.length + 100, poisoned, poisoned));
