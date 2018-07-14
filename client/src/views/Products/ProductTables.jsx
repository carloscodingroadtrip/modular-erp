import React from 'react';
// react component for creating dynamic tables
import ReactTable from 'react-table';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import Assignment from '@material-ui/icons/Assignment';
import Dvr from '@material-ui/icons/Dvr';
import Favorite from '@material-ui/icons/Favorite';
import Work from '@material-ui/icons/Work';
import Change from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Delete';

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';

import { productTable } from 'variables/general.jsx';

import { cardTitle } from 'assets/jss/material-dashboard-pro-react.jsx';

const styles = {
	cardIconTitle: {
		...cardTitle,
		marginTop: '5px',
		marginBottom: '0px',
	},
};

class ReactTables extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: productTable.dataRows.map((prop, key) => {
				return {
					line: key,
					ID: prop[0],
					Description: prop[1],
					// we've added some custom button actions
					actions: (
						<div className="actions-right">
							{/* use this button to add a like kind of action */}
							<Button
								justIcon
								round
								simple
								onClick={() => {
									let obj = this.state.data.find(o => o.id === key);
									alert(
										"You've clicked LIKE button on \n{ \nOrder: " +
											obj.order +
											', \nCustomer: ' +
											obj.customer +
											'\nStatus: ' +
											obj.status +
											'\n}'
									);
								}}
								color="success"
								className="edit"
							>
								<Change />
							</Button>{' '}
							{/* use this button to add a edit kind of action */}
							<Button
								justIcon
								round
								simple
								onClick={() => {
									let obj = this.state.data.find(o => o.id === key);
									alert(
										"You've clicked LIKE button on \n{ \nOrder: " +
											obj.order +
											', \nCustomer: ' +
											obj.customer +
											'\nStatus: ' +
											obj.status +
											'\n}'
									);
								}}
								color="warning"
								className="edit"
							>
								<Work />
							</Button>{' '}
							{/* use this button to remove the data row */}
							<Button
								justIcon
								round
								simple
								onClick={() => {
									var data = this.state.data;
									data.find((o, i) => {
										if (o.id === key) {
											// here you should add some custom code so you can delete the data
											// from this component and from your server as well
											data.splice(i, 1);
											return true;
										}
										return false;
									});
									this.setState({ data: data });
								}}
								color="danger"
								className="remove"
							>
								<Close />
							</Button>{' '}
						</div>
					),
				};
			}),
		};
	}
	render() {
		const { classes } = this.props;
		return (
			<GridContainer>
				<GridItem xs={12}>
					<Card>
						<CardHeader color="primary" icon>
							<CardIcon color="primary">
								<Assignment />
							</CardIcon>
							<h4 className={classes.cardIconTitle}>Products</h4>
						</CardHeader>
						<CardBody>
							<ReactTable
								data={this.state.data}
								filterable
								columns={[
									{
										Header: 'Product#',
										accessor: 'ID',
									},
									{
										Header: 'Description',
										accessor: 'Description',
									},
									{
										Header: 'Actions',
										accessor: 'actions',
										sortable: false,
										filterable: false,
									},
								]}
								defaultPageSize={10}
								showPaginationTop
								showPaginationBottom={false}
								className="-striped -highlight"
							/>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		);
	}
}

export default withStyles(styles)(ReactTables);
