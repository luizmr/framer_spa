import http from 'services/commons/commonHttp';

const getAllPosts = (id: string) => {
	return http.get(`/posts?userId=${id}`);
};

const getAllComments = (id: string) => {
	return http.get(`/comments?postId=${id}`);
};

export default {
	getAllPosts,
	getAllComments,
};
