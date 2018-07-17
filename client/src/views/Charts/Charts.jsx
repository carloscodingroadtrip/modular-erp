import React from 'react';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
import Tooltip from '@material-ui/core/Tooltip';
import Button from 'components/CustomButtons/Button.jsx';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import AccessTime from '@material-ui/icons/AccessTime';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Refresh from '@material-ui/icons/Refresh';
import Edit from '@material-ui/icons/Edit';

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';

import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

import { dailySalesChart, emailsSubscriptionChart } from 'variables/charts';

import chartsStyle from 'assets/jss/material-dashboard-pro-react/views/chartsStyle.jsx';

class Charts extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<GridContainer>
					<GridItem xs={12} sm={12} md={4}>
						<Card chart className={classes.cardHover}>
							<CardHeader color="info" className={classes.cardHeaderHover}>
								<ChartistGraph
									className="ct-chart-white-colors"
									data={dailySalesChart.data}
									type="Line"
									options={dailySalesChart.options}
									listener={dailySalesChart.animation}
								/>
							</CardHeader>
							<CardBody>
								<div className={classes.cardHoverUnder}>
									<Tooltip
										id="tooltip-top"
										title="Refresh"
										placement="bottom"
										classes={{ tooltip: classes.tooltip }}
									>
										<Button simple color="info" justIcon>
											<Refresh className={classes.underChartIcons} />
										</Button>
									</Tooltip>
									<Tooltip
										id="tooltip-top"
										title="Change Date"
										placement="bottom"
										classes={{ tooltip: classes.tooltip }}
									>
										<Button color="transparent" simple justIcon>
											<Edit className={classes.underChartIcons} />
										</Button>
									</Tooltip>
								</div>
								<h4 className={classes.cardTitle}>Daily Sales</h4>
								<p className={classes.cardCategory}>
									<span className={classes.successText}>
										<ArrowUpward className={classes.upArrowCardCategory} /> 55%
									</span>{' '}
									increase in today sales.
								</p>
							</CardBody>
							<CardFooter chart>
								<div className={classes.stats}>
									<AccessTime /> updated 4 minutes ago
								</div>
							</CardFooter>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<Card chart className={classes.cardHover}>
							<CardHeader color="warning" className={classes.cardHeaderHover}>
								<ChartistGraph
									className="ct-chart-white-colors"
									data={emailsSubscriptionChart.data}
									type="Bar"
									options={emailsSubscriptionChart.options}
									responsiveOptions={emailsSubscriptionChart.responsiveOptions}
									listener={emailsSubscriptionChart.animation}
								/>
							</CardHeader>
							<CardBody>
								<div className={classes.cardHoverUnder}>
									<Tooltip
										id="tooltip-top"
										title="Refresh"
										placement="bottom"
										classes={{ tooltip: classes.tooltip }}
									>
										<Button simple color="info" justIcon>
											<Refresh className={classes.underChartIcons} />
										</Button>
									</Tooltip>
									<Tooltip
										id="tooltip-top"
										title="Change Date"
										placement="bottom"
										classes={{ tooltip: classes.tooltip }}
									>
										<Button color="transparent" simple justIcon>
											<Edit className={classes.underChartIcons} />
										</Button>
									</Tooltip>
								</div>
								<h4 className={classes.cardTitle}>Email Subscriptions</h4>
								<p className={classes.cardCategory}>Last Campaign Performance</p>
							</CardBody>
							<CardFooter chart>
								<div className={classes.stats}>
									<AccessTime /> campaign sent 2 days ago
								</div>
							</CardFooter>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		);
	}
}

export default withStyles(chartsStyle)(Charts);
