import React from 'react';
import { TodosOutput } from 'models/todo';
import { Card, CardContent, Checkbox } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

type Props = {
	todos: TodosOutput[];
};

const TodoCards = ({ todos }: Props) => {
	return (
		<>
			{todos.map((obj) => (
				<Card className="general__card">
					<CardContent className="general__content">
						<div className="content__task">
							<p>Atividade:</p>
							<p>{obj.title}</p>
						</div>
						<Checkbox
							icon={<CheckCircleOutlineOutlinedIcon />}
							checkedIcon={<CheckCircleIcon />}
							checked={obj.completed}
							color="default"
							disabled
						/>
					</CardContent>
				</Card>
			))}
		</>
	);
};

export default TodoCards;
