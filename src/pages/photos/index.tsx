import React, { useEffect, useState } from 'react';

// components
import HeaderComponent from 'components/headerComponent';
import PhotoCards from './components/PhotoCards';

// models
import { PhotoOutput } from 'models/album';

// services
import { AlbumService } from 'services';

const Albums = () => {
	const albumPathname = window.location.pathname;
	const albumId = albumPathname.substring(albumPathname.lastIndexOf('/') + 1);
	const [photos, setPhotos] = useState<PhotoOutput[]>([]);

	useEffect(() => {
		AlbumService.getAllPhotos(albumId).then(({ data }) => setPhotos(data));
	}, []);

	return (
		<div className="general">
			<HeaderComponent
				title={'Fotos'}
				subtitle={'Abaixo estão as imagens do álbum:'}
				path={'/albums'}
			/>
			<PhotoCards photos={photos} />
		</div>
	);
};

export default Albums;
