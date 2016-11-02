'use babel';
import moment from 'moment';

const provider = {
	selector: '*',
	inclusionPriority: 1,
	getSuggestions: ({prefix}) => {
		let text = null;

		if (/^(date|dd)$/.test(prefix)) {
			text = moment().format('YYYY-MM-DD');
		} else if (/^(time|dt)$/.test(prefix)) {
			text = moment().format('hh:mm:ss')
		} else if (/^now$/.test(prefix)) {
			text = moment().format('YYYY-MM-DD hh:mm:ss')
		} else {
			return Promise.resolve(null);
		}

		return new Promise(resolve => {
			const suggestion = {
				text,
				displayText: text,
				replacementPrefix: prefix
			};
			resolve([suggestion])
		});
	}
};

export default {
	provide: () => provider,
		activate: () => null
};
