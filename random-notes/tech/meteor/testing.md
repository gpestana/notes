## Testing in Meteor

The 3 main types of testing that are used in Meteor:

- Unit tests: testing small pieces of the application in isolation of each other (e.g: does the task.getData() works as expected?);

- Integration test: tests several components at the same time and how they behave together. This might include front and backend components;

- Acceptance tests: end to end testing;

- Load tests: test how the application behaves under high load;


#### Running tests

The defacto command to run tests in meteor is `meteor test --driver-package <driver package>`. The driver package is a bundled test application that runs instead of the app to be tests. The driver package will fetch all the test files (string match), run the tests and return the results. E.g. `meteor test --driver-package meteor add practicalmeteor:mocha`


The test files must be named as `*.app-test[s].*` and  `*.app-spec[s].*`. These are the files that will be loaded and executed by the driver package.

Example of a test file with Mocha:

```javascript
describe('Module tests', function () {
  it('behaves the way it should', function () {
  	// A) generate data
  	// B) pass data to component to test
  	// C) assert results ...
  	// ...
  })
})
```

#### Testing data

To ensure that the database is clean when the tests run, there are some packages that do that for us: `import { resetDatabase } from 'meteor/xolvio:cleaner';` . `resetDatabase()` should be called at the beginning of each test suite to ensure that the db is clean before setting up the database for tests.

To load data, the Collection.insert() may be used. Though, it is better to use [Factories](https://guide.meteor.com/testing.html#generating-test-data). Factories help to populate collections with random data.

It may be useful to create stubs (mocking) the database. Packages such as `meteor/hwillson:stub-collections` do a good job at it.


#### React testing

For testing React components, the [Enzyme](https://github.com/airbnb/enzyme) package is the way to go. It has a `shallow()` function, which returns an initialized React component ready to be asserted [example](https://github.com/airbnb/enzyme#shallow-rendering)



```javascript
import { shallow } from 'enzyme';

 //...

const component = shallow(<MyComponent />);
chai.assert(component.hasClass('list-item'));

 //...
```

//Packages to install:

meteor add practicalmeteor:mocha 	--> Test manager
meteor add practicalmeteor:chai 	--> Asserts
meteor npm install enzyme 				--> React 

(meteor npm install --save react react-addons-test-utils chai)

//Run:
meteor test --driver-package practicalmeteor:mocha


-- OR --

Test React in isolation (a.k.a without Meteor!)

    The isolated unit test will force your code to be less coupled to Meteor (good thing), and they will run much faster (good thing).

    The Meteor test mode is useful for testing the configuration of Meteor specific features, like publications etc. This is where unit tests are mostly useless.

    If you want to make sure that the combination of the react components and the Meteor features work well together, you can just write 1 or 2 end-to-end tests.


https://facebook.github.io/react/docs/test-utils.html
https://www.toptal.com/react/how-react-components-make-ui-testing-easy



### Summary:

- Unit tests (backend and frontend), integration tests, acceptance tests and load tests;
- Running tests with driver packages that load all test files and execute them;
- Clean database before tests and generate data with Factories (tear down and setup);
- Mocking React components with Enyzme package;
- (usually better to) Create database mocks for backend tests;
