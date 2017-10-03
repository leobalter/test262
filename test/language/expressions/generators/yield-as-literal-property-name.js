// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `yield` may be used as a literal property name in an object literal
    within generator function bodies.
es6id: 12.1.1
 features: [generators]
---*/

var result;
var g = function*() {
  ({ get yield() { return 1 } });
};

result = g().next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
