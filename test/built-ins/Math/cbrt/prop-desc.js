// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
es6id: 20.2.2.9
description: Testing descriptor property of Math.cbrt
includes: [propertyHelper.js]
---*/

verifyNotEnumerable(Math, "cbrt");
verifyWritable(Math, "cbrt");
verifyConfigurable(Math, "cbrt");
