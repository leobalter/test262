/*
*/#!
/*---
esid: pending
description: >
    Hashbang comments should only be allowed at the start of source texts and should not be preceded by multi-line comments.
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]
flags: [raw]
negative:
  phase: parse
  type: SyntaxError
features: [hashbang]
---*/

$DONOTEVALUATE();
