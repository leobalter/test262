\u0023!
/*---
esid: pending
description: >
    Hashbang comments should not be allowed to have encoded characters \u0023
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]
flags: [raw]
negative:
  phase: parse
  type: SyntaxError
features: [hashbang]
---*/
