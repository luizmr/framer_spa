import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, CardContent, IconButton, Tooltip } from '@mui/material';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { AlbumOutput } from 'models/album';

type Props = {
	albums: AlbumOutput[];
};

const AlbumCards = ({ albums }: Props) => {
	const navigate = useNavigate();
	return (
		<>
			{albums.map((obj) => (
				<Card className="general__card">
					<CardContent className="general__content">
						<div className="content__task">
							<p>Titulo:</p>
							<p>{obj.title}</p>
						</div>
						<Tooltip title="Ir para o álbum">
							<IconButton
								onClick={() => navigate(`/albums/${obj.id}`)}
							>
								<ChevronRightRoundedIcon fontSize="large" />
							</IconButton>
						</Tooltip>
					</CardContent>
				</Card>
			))}
		</>
	);
};

export default AlbumCards;
