import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VectorMap } from 'react-jvectormap';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import dashboardStyle from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle';

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Table from 'components/Table/Table.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import CardBody from 'components/Card/CardBody.jsx';

import Language from '@material-ui/icons/Language';

const us_flag = require('assets/img/flags/US.png');
const mx_flag = require('assets/img/flags/MX.png');
const vn_flag = require('assets/img/flags/VN.png');

var mapData = {
	AU: 760,
	BR: 550,
	CA: 120,
	DE: 1300,
	FR: 540,
	GB: 690,
	GE: 200,
	IN: 200,
	RO: 600,
	RU: 300,
	US: 2920,
};
class CustomersMap extends Component {
	render() {
		const { classes } = this.props;
		return (
			<GridContainer>
				<GridItem xs={12}>
					<Card>
						<CardHeader color="success" icon>
							<CardIcon color="success">
								<Language />
							</CardIcon>
							<h4 className={classes.cardIconTitle}>Global Sales by Top Locations</h4>
						</CardHeader>
						<CardBody>
							<GridContainer justify="space-between">
								<GridItem xs={12} sm={12} md={5}>
									<Table
										tableData={[
											[<img src={us_flag} alt="us_flag" />, 'USA', '2.920', '69.20%'],
											[<img src={mx_flag} alt="mx_flag" />, 'Mexico', '1.300', '20.43%'],
											[<img src={vn_flag} alt="vn_flag" />, 'Vietnam', '760', '10.35%'],
										]}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={6}>
									<VectorMap
										map={'world_mill'}
										backgroundColor="transparent"
										zoomOnScroll={false}
										containerStyle={{
											width: '100%',
											height: '280px',
										}}
										containerClassName="map"
										regionStyle={{
											initial: {
												fill: '#e4e4e4',
												'fill-opacity': 0.9,
												stroke: 'none',
												'stroke-width': 0,
												'stroke-opacity': 0,
											},
										}}
										series={{
											regions: [
												{
													values: mapData,
													scale: ['#F10049', '#Ffd616'],
													normalizeFunction: 'polynomial',
												},
											],
										}}
									/>
								</GridItem>
							</GridContainer>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		);
	}
}

CustomersMap.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(CustomersMap);
