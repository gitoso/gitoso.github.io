HUGO_IMAGE := hugomods/hugo:exts
CONTAINER_NAME := hugo-blog
PORT := 1313

.PHONY: serve build stop

serve:
	docker run --rm -it \
		--name $(CONTAINER_NAME) \
		-p $(PORT):$(PORT) \
		-v $(CURDIR):/src \
		$(HUGO_IMAGE) \
		hugo server --bind 0.0.0.0 --port $(PORT)

build:
	docker run --rm \
		-v $(CURDIR):/src \
		$(HUGO_IMAGE) \
		hugo --minify

stop:
	docker stop $(CONTAINER_NAME)
