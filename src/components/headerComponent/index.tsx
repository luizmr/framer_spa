import React from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { IconButton } from '@mui/material';
import SubdirectoryArrowLeftRoundedIcon from '@mui/icons-material/SubdirectoryArrowLeftRounded';

type Props = {
	title: string;
	subtitle: string;
	path?: string;
};

const HeaderComponent = ({ title, subtitle, path = '/' }: Props) => {
	const navigate = useNavigate();
	return (
		<div className="header-component">
			<div className="header-component__text">
				<p>{title}</p>
				<p>{subtitle}</p>
			</div>
			<div className="header-component__button">
				<IconButton
					aria-label="back-button"
					onClick={() => navigate(path)}
				>
					<SubdirectoryArrowLeftRoundedIcon fontSize="large" />
				</IconButton>
			</div>
		</div>
	);
};

export default HeaderComponent;
