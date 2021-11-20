import React from 'react';

import { Card, CardContent, Chip } from '@mui/material';
import { PhotoOutput } from 'models/album';

type Props = {
	photos: PhotoOutput[];
};

const PhotoCards = ({ photos }: Props) => {
	return (
		<div className="photo__list">
			{photos.map((obj) => (
				<Card className="photo__card">
					<CardContent className="photo__content">
						<div className="content__main">
							<div className="content__header">
								<p>Foto</p>
								<Chip label={`#${obj.id}`} />
							</div>
							<div className="content__img">
								<img src={obj.url} alt={`${obj.id}`} />
							</div>
						</div>
						<div className="content__footer">
							<p>Título:</p>
							<p>{obj.title}</p>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
};

export default PhotoCards;
