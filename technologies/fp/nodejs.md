## data.either

data.either [(github))](https://github.com/folktale/data.either) module implements the Either(a,b) structure, which represents a relation between two distinct alternatives - the `a` and `b`. The data structure may contain an `a` or `b` at any given time. 

This structure can be used when a function returns a result that may be successful or an error. This way we avoid try,catch blocks and make sure that errors need to be explicitly handled.

Either is a monad, which makes it playing well with other monads, allowing chaining them in.

In the snippet:

``` javascript

const readFile = path => {
  const result;
  try {
    result = someLib.readFileSync(path);
  } catch(e) {
    return Either.Left({err: e});
  }
  return Either.Right(result);
}

```

readFile() returns an Either structure. The Either structure may be an error or a successful result, depending on the result of readFile() logic implementation. The function which calls readFile does not need to wrap it in try,catch block. Furthermore, the results of readFile can be chained in with other mondads.