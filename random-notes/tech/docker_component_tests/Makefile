component-tests:
	docker-compose -f ./component-tests/docker-compose.yml rm -f
	docker-compose -f ./component-tests/docker-compose.yml pull
	docker-compose -f ./component-tests/docker-compose.yml up -d --build

logs:
	docker-compose -f ./component-tests/docker-compose.yml logs >& artifacts.log
