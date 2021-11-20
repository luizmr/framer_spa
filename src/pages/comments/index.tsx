import React, { useEffect, useState } from 'react';

// components
import HeaderComponent from 'components/headerComponent';
import CommentCards from './components/CommentCards';

// models
import { CommentOutput } from 'models/post';

// services
import { PostService } from 'services';

const Comments = () => {
	const postPathname = window.location.pathname;
	const postId = postPathname.substring(postPathname.lastIndexOf('/') + 1);
	const [comments, setComments] = useState<CommentOutput[]>([]);

	useEffect(() => {
		PostService.getAllComments(postId).then(({ data }) =>
			setComments(data),
		);
	}, []);

	return (
		<div className="general">
			<HeaderComponent
				title={'Comentários'}
				subtitle={'Abaixo estão os comentários da postagem:'}
				path={'/posts'}
			/>
			<CommentCards comments={comments} />
		</div>
	);
};

export default Comments;
