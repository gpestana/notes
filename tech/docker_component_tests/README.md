## Component tests with Docker

Component tests are easy to setup with Docker. Easy to maintain and ensure reproducibility and reliability across test sets and across different testing environments. Docker component tests also help to avoid mocking services for testing. Mocks are interesting to use in some contexts but easily derail into testing cases that do not address production scenarios anymore. Component tests should be as close to production environment as possible, while maintaining its subset modularity and setup speed. Docker excels at providing modular and reproducible test environments.

In this example, the aim is to test the a set of API endpoints. The API interacts with a database to store/retrieve data which will be served to the user. The API and database are running in docker containers. The component tests are spin up in a docker container as well.

The requirements for the component tests setup are:

- One command to start tests in a clean state;
- Automatically save the latest tests artifacts (test results, service logs);
- The test should run as fast as possible.


#### Makefile:

The Makefile has a couple of steps to help running the docker containers.

```
component-tests:
	docker-compose -f ./component-tests/docker-compose.yml rm -f
	docker-compose -f ./component-tests/docker-compose.yml pull
	docker-compose -f ./component-tests/docker-compose.yml up -d --build

logs:
	docker-compose -f ./component-tests/docker-compose.yml logs >& artifacts.log
```

Running `make component-tests` step will remove all previous test containers, update and build the docker images if there are any changes and run the component tests in the background. The `make logs` will output all container logs from the component tests to the file artifacts.log.  