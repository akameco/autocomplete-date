'use babel';
import moment from 'moment';

const format = prefix => {
	if (/^(date|dd)$/.test(prefix)) {
		return moment().format('YYYY-MM-DD');
	}
	if (/^(time|dt)$/.test(prefix)) {
		return moment().format('HH:mm:ss');
	}
	if (/^now$/.test(prefix)) {
		return moment().format('YYYY-MM-DD HH:mm:ss');
	}
	return null;
};

const provider = {
	selector: '*',
	inclusionPriority: 1,
	getSuggestions: ({prefix}) => {
		return new Promise(resolve => {
			const text = format(prefix);

			if (!text) {
				return resolve(null);
			}

			const suggestion = {
				text,
				displayText: text,
				replacementPrefix: prefix
			};
			resolve([suggestion]);
		});
	}
};

export default {
	provide: () => provider,
	activate: () => null
};
