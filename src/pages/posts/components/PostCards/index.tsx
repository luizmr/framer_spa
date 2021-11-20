import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, CardContent, IconButton, Tooltip } from '@mui/material';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import { PostOutput } from 'models/post';

type Props = {
	posts: PostOutput[];
};

const PostCards = ({ posts }: Props) => {
	const navigate = useNavigate();
	return (
		<>
			{posts.map((obj) => (
				<Card className="general__card">
					<CardContent className="general__content">
						<div className="content__tasks">
							<div className="content__task">
								<p>Titulo:</p>
								<p>{obj.title}</p>
							</div>
							<div className="content__task">
								<p>Conteúdo:</p>
								<p>{obj.body}</p>
							</div>
						</div>

						<Tooltip title="Ir para os comentários">
							<IconButton
								onClick={() => navigate(`/posts/${obj.id}`)}
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

export default PostCards;
