import Paper from '@material-ui/core/Paper';
import { Chart, Legend, PieSeries, Title, Tooltip, } from '@devexpress/dx-react-chart-material-ui';
import { Animation, EventTracker, SelectionState } from '@devexpress/dx-react-chart';
import React, { useState } from "react";
import { Box } from '@material-ui/core';

interface PropsBarChar {
	data: any,
	percentages: {
		q1: number,
		q2: number
	}
}

export const BarChar: React.FC<PropsBarChar> = (props) => {
	const [data] = useState(props.data)
	const selecionData: any[] = []
	const [selection, setSelection] = useState(selecionData)

	const compare = ({ series, point }: any, { series: targetSeries, point: targetPoint }: any) =>
		series === targetSeries && point === targetPoint;

	const click = ({ targets }: any) => {
		const target = targets[0];
		if (target) {
			setSelection(selection[0] && compare(selection[0], target) ? [] : [target])
		}
	};

	return (
		<>
			{
				selection.length
					? <Box component="span"> {data[selection[0].point].value} voted this option</Box>
					: null
			}
			<Paper>
				<Chart data={data} >
					<PieSeries
						valueField="value"
						argumentField="label"
					/>
					<Legend />
					<Title text="Would you rather ?" />
					<Animation />
					<EventTracker onClick={click} />
					<SelectionState selection={selection} />
					<Tooltip />
				</Chart>
			</Paper>
		</>
	)
}