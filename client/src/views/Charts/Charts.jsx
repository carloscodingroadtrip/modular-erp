import React from 'react';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Timeline from '@material-ui/icons/Timeline';

// core components
import Heading from 'components/Heading/Heading.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';

import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

import { roundedLineChart, straightLinesChart, simpleBarChart } from 'variables/charts.jsx';

import chartsStyle from 'assets/jss/material-dashboard-pro-react/views/chartsStyle.jsx';

class Charts extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<GridContainer>
					<GridItem xs={12} sm={12} md={4}>
						<Card chart>
							<CardHeader color="rose">
								<ChartistGraph
									className="ct-chart-white-colors"
									data={roundedLineChart.data}
									type="Line"
									options={roundedLineChart.options}
									listener={roundedLineChart.animation}
								/>
							</CardHeader>
							<CardBody>
								<h4 className={classes.cardTitle}>Weekly Orders</h4>
								<p className={classes.cardCategory}>Line Chart</p>
							</CardBody>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<Card chart>
							<CardHeader color="warning">
								<ChartistGraph
									className="ct-chart-white-colors"
									data={straightLinesChart.data}
									type="Line"
									options={straightLinesChart.options}
									listener={straightLinesChart.animation}
								/>
							</CardHeader>
							<CardBody>
								<h4 className={classes.cardTitle}>Gallons shipped</h4>
								<p className={classes.cardCategory}>Products database</p>
							</CardBody>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<Card chart>
							<CardHeader color="info">
								<ChartistGraph
									className="ct-chart-white-colors"
									data={simpleBarChart.data}
									type="Bar"
									options={simpleBarChart.options}
									responsiveOptions={simpleBarChart.responsiveOptions}
									listener={simpleBarChart.animation}
								/>
							</CardHeader>
							<CardBody>
								<h4 className={classes.cardTitle}>Monthly Orders</h4>
								<p className={classes.cardCategory}>Lubrimar</p>
							</CardBody>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		);
	}
}

export default withStyles(chartsStyle)(Charts);
