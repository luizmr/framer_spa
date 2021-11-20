import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

type Props = {
	value: string;
	handleChange: (e: any) => void;
	options: any;
	label: string;
};

const SelectComponent = ({ value, handleChange, options, label }: Props) => {
	return (
		<FormControl sx={{ m: 1, minWidth: 120 }}>
			<InputLabel id="component-select">{label}</InputLabel>
			<Select
				labelId="component-select"
				id="select"
				value={value}
				label={label}
				onChange={(e) => handleChange(e.target.value)}
			>
				{options.map((obj: any) => (
					<MenuItem value={obj.id}>{obj.name}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default SelectComponent;
