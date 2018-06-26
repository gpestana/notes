## data.either

data.either [(github))](https://github.com/folktale/data.either/blob/master/lib/either.js) module implements the Either(a,b) structure, which represents a relation between two distinct alternatives - the `a` and `b`. The data structure may contain an `a` or `b` at any given time. 

This structure can be used when a function returns a result that may be successful or an error. This way we avoid try,catch blocks and make sure that errors need to be explicitly handled.

Either is a monad, which makes it playing well with other monads, allowing chaining them in.

In the snippet:

``` javascript

const readFile = path => {
  try {
    const result = someLib.readFileSync(path);
    return Either.Right(result)
  } catch(e) {
    return Either.Left({err: e});
  }
}

const file = readFile(path);


file.isLeft; //boolean
file.isRight; //boolean
file.orElse('returns this string if Left');

//...

```

readFile() returns an Either structure. The Either structure may be an error or a successful result, depending on the result of readFile() logic implementation. The function which calls readFile does not need to wrap it in try,catch block. Furthermore, the results of readFile can be chained in with other mondads.

The data.either should be prefered over data.task when the operations over which it wraps on are sync.

The data.either [(source code))](https://github.com/folktale/data.either/blob/master/lib/either.js) is the best documentation for the module.

