import { IUsers } from './declarations'

export let users: IUsers = {
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
			"6ni6ok3ym7mf1p33lnez": 'optionTwo'
		},
		questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
	}
}

