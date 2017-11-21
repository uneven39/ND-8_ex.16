const sinon				= require('sinon');
const assert			= require('assert');

const Pokemon			= require('../Classes').Pokemon;

let pikachu		= new Pokemon('Pikachu', 80);

describe('Pokemon Class', () => {
	it('Объект класса pikachu должен показать свои имя "Pikachu" и уровень "80"', () => {
		let loggerSpy = sinon.spy(console, 'log');
		pikachu.show();
		assert(loggerSpy.calledWith(`Hi! My name is Pikachu, my level is 80`));
		loggerSpy.restore();
	})
});
