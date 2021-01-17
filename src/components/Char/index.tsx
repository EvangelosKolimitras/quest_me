import Paper from '@material-ui/core/Paper';
import { Chart, Legend, PieSeries, Title, Tooltip, } from '@devexpress/dx-react-chart-material-ui';
import { Animation, EventTracker, SelectionState } from '@devexpress/dx-react-chart';
import React, { useState } from "react";
import { Box } from '@material-ui/core';
import { useStyles } from './styles';

interface PropsBarChar {
	data: any,
	percentages: {
		q1: number,
		q2: number
	}
}

export const BarChar: React.FC<PropsBarChar> = (props) => {
	const [data] = useState(props.data)
	const selectionData: any[] = []
	const [selection, setSelection] = useState(selectionData)
	const classes = useStyles()

	const compare = ({ series, point }: any, { series: targetSeries, point: targetPoint }: any) =>
		series === targetSeries && point === targetPoint;

	const click = ({ targets }: any) => {
		const target = targets[0];
		if (target) {
			setSelection(selection[0] && compare(selection[0], target) ? [] : [target])
		}
	};

	const TitleText = (props: any) => <Title.Text {...props} className={classes.chartTitle} />
	const LabelText = (props: any) => <Legend.Label {...props} className={classes.chartTitle} />
	const PieSeriesComponent = (props: any) => <PieSeries.Point {...props} className={classes.pieSeriesChart} maxRadius={140} />
	const TooltipContentComponent = (props: any) => <Tooltip.Content placement="right" {...props} className={classes.tooltip} />

	return (
		<Legend.Root>
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
						pointComponent={PieSeriesComponent}
					/>
					<Title text="Would you rather?" textComponent={TitleText} />
					<Animation />
					<EventTracker onClick={click} />
					<SelectionState selection={selection} />
					<Tooltip contentComponent={TooltipContentComponent} />
					<Legend position="bottom" labelComponent={LabelText} />
				</Chart>
			</Paper>
		</Legend.Root>
	)
}