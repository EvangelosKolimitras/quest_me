
export let users = {
	jane_smith: {
		id: 'jane_smith',
		name: 'Jane Smith',
		avatarURL: "https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
		answers: {
			"8xf0y6ziyjabvozdd253nd": 'optionOne',
			"6ni6ok3ym7mf1p33lnez": 'optionTwo',
			"am8ehyc8byjqgar0jgpub9": 'optionTwo',
			"loxhs1bqm25b708cmbf3g": 'optionTwo'
		},
		questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
	},
	evangeloskolimitras: {
		id: 'evangeloskolimitras',
		name: 'Evangelos Kolimitras',
		avatarURL: "https://avatars3.githubusercontent.com/u/35934542?s=460&u=fa2c6bee7e4dfe5dec44e9dc2899e2046dc37699&v=4",
		answers: {
			"vthrdm985a262al8qx3do": 'optionOne',
			"xj352vofupe1dqz9emx13r": 'optionTwo',
			"8xf0y6ziyjabvozdd253nd": 'optionTwo',
		},
		questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
	},
	johndoe: {
		id: 'johndoe',
		name: 'John Doe',
		avatarURL: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
		answers: {
			"xj352vofupe1dqz9emx13r": 'optionOne',
			"vthrdm985a262al8qx3do": 'optionTwo',
			"6ni6ok3ym7mf1p33lnez": 'optionTwo',
			"8xf0y6ziyjabvozdd253nd": 'optionTwo',
		},
		questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
	}
}


export let questions = {
	"8xf0y6ziyjabvozdd253nd": {
		id: '8xf0y6ziyjabvozdd253nd',
		author: 'jane_smith',
		timestamp: 1467166872634,
		optionOne: {
			votes: ['jane_smith',],
			text: 'have horrible short term memory',
		},
		optionTwo: {
			votes: ["johndoe", "evangeloskolimitras"],
			text: 'have horrible long term memory'
		}
	},
	"6ni6ok3ym7mf1p33lnez": {
		id: '6ni6ok3ym7mf1p33lnez',
		author: 'johndoe',
		timestamp: 1468479767190,
		optionOne: {
			votes: [],
			text: 'become a superhero',
		},
		optionTwo: {
			votes: ['johndoe', 'jane_smith'],
			text: 'become a supervillain'
		}
	},
	"am8ehyc8byjqgar0jgpub9": {
		id: 'am8ehyc8byjqgar0jgpub9',
		author: 'jane_smith',
		timestamp: 1488579767190,
		optionOne: {
			votes: [],
			text: 'be telekinetic',
		},
		optionTwo: {
			votes: ['jane_smith'],
			text: 'be telepathic'
		}
	},
	"loxhs1bqm25b708cmbf3g": {
		id: 'loxhs1bqm25b708cmbf3g',
		author: 'evangeloskolimitras',
		timestamp: 1482579767190,
		optionOne: {
			votes: [],
			text: 'be a front-end developer',
		},
		optionTwo: {
			votes: ['jane_smith'],
			text: 'be a back-end developer'
		}
	},
	"vthrdm985a262al8qx3do": {
		id: 'vthrdm985a262al8qx3do',
		author: 'evangeloskolimitras',
		timestamp: 1489579767190,
		optionOne: {
			votes: ['evangeloskolimitras'],
			text: 'find $50 yourself',
		},
		optionTwo: {
			votes: ['johndoe'],
			text: 'have your best friend find $500'
		}
	},
	"xj352vofupe1dqz9emx13r": {
		id: 'xj352vofupe1dqz9emx13r',
		author: 'johndoe',
		timestamp: 1493579767190,
		optionOne: {
			votes: ['johndoe'],
			text: 'write JavaScript',
		},
		optionTwo: {
			votes: ['evangeloskolimitras'],
			text: 'write Swift'
		}
	},
}
