const sinon				= require('sinon');
const assert			= require('assert');
const expect			= require('chai').expect;

const Pokemon			= require('../Classes').Pokemon;
const PokemonList	= require('../Classes').Pokemonlist;

let pikachu		= new Pokemon('Pikachu', 80);
let pokiList	= new PokemonList();

describe('Классы', () => {
	describe('Pokemon Class', () => {
		it('Объект класса pikachu должен показать свои имя "Pikachu" и уровень "80"', () => {
			let loggerSpy = sinon.spy(console, 'log');
			pikachu.show();
			assert(loggerSpy.calledWith(`Hi! My name is Pikachu, my level is 80`));
			loggerSpy.restore();
		})

	});

	describe('PokemonList Class', () => {
		it('Добавление покемона bulbasaur в список: последний элемент списка должен быть bulbasaur', () => {
			pokiList.add('Bulbasaur', 60);
			expect(pokiList[pokiList.length() - 1]).to.be.equal()
		})
	});
});