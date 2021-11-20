export interface AlbumOutput {
	id: number;
	userId: number;
	title: string;
}

export interface PhotoOutput {
	id: number;
	albumId: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}
