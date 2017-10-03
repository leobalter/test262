// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `return` is a valid statement within generator function bodies.
es6id: 14.4
 features: [generators]
---*/

var result;
var g1 = function*() { return; };
var g2 = function*() { return 1; };

result = g1().next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

result = g2().next();
assert.sameValue(result.value, 1);
assert.sameValue(result.done, true);
