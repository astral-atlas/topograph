.PHONY: clean

clean:
	rm -rf dist

dist: dist/topograph.esm.js dist/topograph.cjs.js

dist/topograph.esm.js dist/topograph.cjs.js: node_modules $(wildcard src/*.js) rollup.config.js
	node_modules/.bin/rollup -c
