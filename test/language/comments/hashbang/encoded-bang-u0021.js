#\u0021
/*---
esid: pending
description: >
    Hashbang comments should not be allowed to have encoded characters \u0021
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]
flags: [raw]
negative:
  phase: parse
  type: SyntaxError
features: [hashbang]
---*/
