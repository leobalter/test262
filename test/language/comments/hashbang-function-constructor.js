/*---
esid: pending
description: >
    Hashbang comments should not be allowed in function evaluator contexts.
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]
---*/
const AsyncFunction = (async function (){}).constructor;
const GeneratorFunction = (function *(){}).constructor;
const AsyncGeneratorFunction = (async function *(){}).constructor;
for (ctor of [
  Function,
  AsyncFunction,
  GeneratorFunction,
  AsyncGeneratorFunction,
]) {
  assert.throws(SyntaxError, () => ctor('#!\n_',''), `${ctor.name} Call argument`);
  assert.throws(SyntaxError, () => ctor('#!\n_'), `${ctor.name} Call body`);
  assert.throws(SyntaxError, () => new ctor('#!\n_',''), `${ctor.name} Construct argument`);
  assert.throws(SyntaxError, () => new ctor('#!\n_'), `${ctor.name} Construct body`);
}
