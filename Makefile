docker-name := ability-stone-sim

docker-build:
	docker build $$(pwd) -t $(docker-name)

docker-run:
	docker run -d -p 80:8000 $(docker-name)