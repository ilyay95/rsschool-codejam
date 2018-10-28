const assert = require('assert');

const sumOfOther = require('../src/sumOfOther');
const make = require('../src/make');
const recursion = require('../src/recursion');

describe('sumOfOther', () => {
	it('1', () => {
		const sum=sumOfOther([2,3,4,1]);
	  assert.equal(sum.toString(), [8,7,6,9]);
	});

	it('2', () => {
		const sum=sumOfOther([33,5,1,1,25,0,1,2,3,8]);
	  assert.equal(sum.toString(), [46, 74, 78, 78, 54, 79, 78, 77, 76, 71]);
	});

	it('3', () => {
		const sum=sumOfOther([1,2,3,4,5,6,7,8,9]);
	  assert.equal(sum.toString(), [44, 43, 42, 41, 40, 39, 38, 37, 36]);
	});

	it('4', () => {
		const sum=sumOfOther([0,1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9]);
	  assert.equal(sum.toString(), [45, 44, 45, 43, 45, 42, 45, 41, 45, 40, 45, 39, 45, 38, 45, 37, 45, 36]);
	});

	it('5', () => {
		const sum=sumOfOther([336.5,55,1.5,6,4.5]);
	  assert.equal(sum.toString(), [67, 348.5, 402, 397.5, 399]);
	});

	it('6', () => {
		const sum=sumOfOther([0]);
	  assert.equal(sum.toString(), [0]);
	});

	it('7', () => {
		const sum=sumOfOther([-1,-55,-77,5,44,22,11,4]);
	  assert.equal(sum.toString(), [-46, 8, 30, -52, -91, -69, -58, -51]);
	});
	
});


	describe('make', () => {
		it('1', () => {
			const count = make(15)(34, 21, 666)(41)((a,b)=>a+b);
			assert.equal(count, (777).toString());
		});

		it('2', () => {
			const count = make(99)(-66, 21, 16)(41)((a,b)=>a-b);
			assert.equal(count, (87).toString());
		});

		it('3', () => {
			const count = make(0)(2, 331, 4)(-21)((a,b)=>a-b);
			assert.equal(count, (-316).toString());
		});

		it('4', () => {
			const count = make(22)(6)(-5)(55)(5)(41)((a,b)=>a+b);
			assert.equal(count, (124).toString());
		});

		it('5', () => {
			const count = make(1)(2, 33, 112,343,5535,654757,-757433,4)(41)((a,b)=>a-b);
			assert.equal(count, (96607).toString());
		});
	});

	describe('recursion', () => {
		it('1', () => {
			const recur = recursion({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}});
			assert.equal(recur, ([100,90,120,70,99,110,130]).toString());
		});
	});