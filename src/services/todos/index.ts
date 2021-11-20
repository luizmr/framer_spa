import http from 'services/commons/commonHttp';

const getAllTodos = (userId: string) => {
	return http.get(`/todos?userId=${userId}`);
};

const getAllUsers = () => {
	return http.get('/users');
};

export default {
	getAllTodos,
	getAllUsers,
};
