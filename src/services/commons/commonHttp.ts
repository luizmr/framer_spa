import axios from 'axios';

import { config } from 'environment';

const httpCommon = axios.create({
	baseURL: config.url.API_URL,
	headers: {
		'Content-type': 'application/json',
	},
});

export default httpCommon;
