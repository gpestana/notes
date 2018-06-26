const Task = require('data.task');
const _ = require('ramda');


// Simple validation pipeline for input, useful for e.g. APIs. The validator
// functions can be sync or async (validators are wrapped in a Task)

const validator1 = _.curry(input => {
  return new Task((reject, resolve) => {
    input == null
      ? reject({err: 'Input cannot be null', input: input})
      : resolve(input)
  });
});

const validator2 = _.curry(input => {
  return new Task((reject, resolve) => {
    typeof input == 'number'
      ? resolve(input)
      : reject({err: 'Input must be number', input: input})
  });
});

const validator3 = _.curry(input => {
  return new Task((reject, resolve) => {
    input < 0
      ? reject({err: 'Input cannot be smaller than 0', input: input})
      : resolve(input)
  });
});

const validationChain = input => validator1(input)
  .chain(validator2)
  .chain(validator3)

const input1 = 'ok';
const input2 = -10
const input3 = 2;

validationChain(input1)
  .fork(
    x => console.log(x),
    y => console.log(y)
  )
// { err: 'Input must be number', input: 'ok' }

validationChain(input2)
  .fork(
    x => console.log(x),
    y => console.log(y)
  )
// { err: 'Input cannot be smaller than 0', input: -10 }

validationChain(input3)
  .fork(
    x => console.log(x),
    y => console.log(y)
  )
// 2

