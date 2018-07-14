import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import ContentCopy from '@material-ui/icons/ContentCopy';
import Store from '@material-ui/icons/Store';
import InfoOutline from '@material-ui/icons/InfoOutline';
import DateRange from '@material-ui/icons/DateRange';
import Update from '@material-ui/icons/Update';
import Work from '@material-ui/icons/Work';

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import ReactTable from 'views/Tables/ReactTables.jsx';

import dashboardStyle from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle';

class Dashboard extends React.Component {
	state = {
		value: 0,
	};
	handleChange = (event, value) => {
		this.setState({ value });
	};
	handleChangeIndex = index => {
		this.setState({ value: index });
	};
	render() {
		const { classes } = this.props;
		return (
			<div>
				<GridContainer>
					<GridItem xs={12} sm={6} md={6} lg={3}>
						<Card>
							<CardHeader color="warning" stats icon>
								<CardIcon color="warning">
									<ContentCopy />
								</CardIcon>
								<p className={classes.cardCategory}>Orders</p>
								<h3 className={classes.cardTitle}>50</h3>
							</CardHeader>
							<CardFooter stats>
								<div className={classes.stats}>
									<Update />
									Just Updated
								</div>
							</CardFooter>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={6} md={6} lg={3}>
						<Card>
							<CardHeader color="success" stats icon>
								<CardIcon color="success">
									<Store />
								</CardIcon>
								<p className={classes.cardCategory}>Revenue</p>
								<h3 className={classes.cardTitle}>$34,245</h3>
							</CardHeader>
							<CardFooter stats>
								<div className={classes.stats}>
									<DateRange />
									Last 24 Hours
								</div>
							</CardFooter>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={6} md={6} lg={3}>
						<Card>
							<CardHeader color="danger" stats icon>
								<CardIcon color="danger">
									<InfoOutline />
								</CardIcon>
								<p className={classes.cardCategory}>Backorders</p>
								<h3 className={classes.cardTitle}>5</h3>
							</CardHeader>
							<CardFooter stats>
								<div className={classes.stats}>
									<Work />
									Review orders
								</div>
							</CardFooter>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={6} md={6} lg={3}>
						<Card>
							<CardHeader color="info" stats icon>
								<CardIcon color="info">
									<Work />
								</CardIcon>
								<p className={classes.cardCategory}>Notes</p>
								<h3 className={classes.cardTitle}>+3</h3>
							</CardHeader>
							<CardFooter stats>
								<div className={classes.stats}>
									<Update />
									Just Updated
								</div>
							</CardFooter>
						</Card>
					</GridItem>
				</GridContainer>
				<GridContainer>
					<ReactTable />
				</GridContainer>
			</div>
		);
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(Dashboard);
