import React from 'react';

import { Avatar, Card, CardContent, Chip } from '@mui/material';
import { CommentOutput } from 'models/post';

type Props = {
	comments: CommentOutput[];
};

const CommentCards = ({ comments }: Props) => {
	return (
		<div className="comment__list">
			{comments.map((obj) => (
				<Card className="comment__card">
					<CardContent className="comment__content">
						<div className="content__header">
							<p>Comentário</p>
							<Chip label={`#${obj.id}`} />
						</div>
						<div className="content__user">
							<Avatar>
								{obj.name.slice(0, 1).toUpperCase()}
							</Avatar>
							<p className="user__name">{obj.name}</p>
							<p>{obj.email}</p>
						</div>
						<div className="content__body">
							<p>{obj.body}</p>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
};

export default CommentCards;
