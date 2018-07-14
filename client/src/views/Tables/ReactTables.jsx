import React from 'react';
// react component for creating dynamic tables
import ReactTable from 'react-table';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import Assignment from '@material-ui/icons/Assignment';
import Change from '@material-ui/icons/Edit';
import Delivery from '@material-ui/icons/Receipt';
import Work from '@material-ui/icons/Work';
import Close from '@material-ui/icons/Delete';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';

import { dataTable } from 'variables/general.jsx';

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
			data: dataTable.dataRows.map((prop, key) => {
				return {
					id: key,
					order: prop[0],
					customer: prop[1],
					date: prop[2],
					due: prop[3],
					status: prop[4],
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
						<CardHeader color="warning" icon>
							<CardIcon color="warning">
								<Assignment />
							</CardIcon>
							<h4 className={classes.cardIconTitle}>Orders</h4>
						</CardHeader>
						<CardBody>
							<ReactTable
								data={this.state.data}
								filterable
								columns={[
									{
										Header: 'Order#',
										accessor: 'order',
									},
									{
										Header: 'Customer',
										accessor: 'customer',
									},
									{
										Header: 'Date',
										accessor: 'date',
									},
									{
										Header: 'Due by',
										accessor: 'due',
									},
									{
										Header: 'Status',
										accessor: 'status',
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
