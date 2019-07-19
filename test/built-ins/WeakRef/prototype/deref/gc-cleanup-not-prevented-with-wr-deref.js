// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-weak-ref.prototype.deref
description: WeakRef deref should not prevent a GC event
info: |
  WeakRef.prototype.deref ( )

  ...
  4. Let target be the value of weakRef.[[Target]].
  5. If target is not empty,
    a. Perform ! KeepDuringJob(target).
    b. Return target.
  6. Return undefined.
features: [WeakRef, host-gc-required]
---*/

var deref = false;
var derefAsync = false;

function emptyCells() {
  var wr;
  (function() {
    var a = {};
    wr = new WeakRef(a);
  })();
  $262.gc();
  deref = wr.deref();
  return Promise.resolve().then(() => {
    derefAsync = wr.deref();
  });
}

emptyCells().then(() => {
  assert.sameValue(derefAsync, undefined);
});

assert.sameValue(typeof deref, 'object', 'object is still in the agent.[[KeptAlive]] list');
