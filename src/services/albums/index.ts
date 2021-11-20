import http from 'services/commons/commonHttp';

const getAllAlbums = (id: string) => {
	return http.get(`/albums?userId=${id}`);
};

const getAllPhotos = (id: string) => {
	return http.get(`/photos?albumId=${id}`);
};

export default {
	getAllAlbums,
	getAllPhotos,
};
