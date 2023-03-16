#!/usr/bin/node
// class Square that defines a square and inherits from Rectangle of 5-square.js

const SquareBase = require(' ./5-square');

class Square extends SquareBase {
	charPrint (c) {
		if (c === undefined) {
			c = 'X';
		}
	}
}

module.exports = square;
