const sinon				= require('sinon');
const assert			= require('assert');
const expect			= require('chai').expect;

const Pokemon			= require('../Classes').Pokemon;
const PokemonList	= require('../Classes').Pokemonlist;

describe('PokemonList Class', () => {
	let	pikachu,
			pokiList;

	before(() => {
		pikachu		= new Pokemon('Pikachu', 80);
		pokiList	= new PokemonList(pikachu);
	});

	it('Добавление покемона bulbasaur в список: последний элемент списка должен быть bulbasaur', () => {
		pokiList.add('Bulbasaur', 60);
		expect(pokiList[pokiList.length - 1]).to.deep.equal(new Pokemon('Bulbasaur', 60));
	});

	it('Вывод данных о списке с длиной списка', () => {
		let loggerSpy = sinon.spy(console, 'log');
		pokiList.show();
		assert(loggerSpy.calledWith(`There are 2 pokemons here.`));
		loggerSpy.restore();
	});

	it('Сильнейший покемон в списке (pikachu)', () => {
		expect(pokiList.max()).to.deep.equal(pikachu);
	})
});
