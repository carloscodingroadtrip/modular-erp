import React from 'react';
// react component for creating dynamic tables
import ReactTable from 'react-table';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import PrintOrder from '@material-ui/icons/Print';
import Assignment from '@material-ui/icons/Assignment';
import Reconcile from '@material-ui/icons/AssignmentTurnedIn';
import Edited from '@material-ui/icons/Edit';
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
							{/* use this button to add a edit kind of action */}
							<Button
								justIcon
								outlined
								simple
								onClick={() => {
									let obj = this.state.data.find(o => o.id === key);
									alert(
										"You've clicked EDIT button for \n{ \nOrder: " +
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
								<Edited />
							</Button>{' '}
							{/* use this button to add a print kind of action */}
							<Button
								justIcon
								round
								simple
								onClick={() => {
									let obj = this.state.data.find(o => o.id === key);
									alert(
										"You've clicked PRINT button on \n{ \nOrder: " +
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
								<PrintOrder />
							</Button>{' '}
							{/* use this button to reconcile the data row */}
							<Button
								justIcon
								round
								simple
								onClick={() => {
									let obj = this.state.data.find(o => o.id === key);
									alert(
										"You've clicked RECONCILED button on \n{ \nOrder: " +
											obj.order +
											', \nCustomer: ' +
											obj.customer +
											'\nStatus: ' +
											obj.status +
											'\n}'
									);
								}}
								color="info"
								className="remove"
							>
								<Reconcile />
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
								defaultFilterMethod={(filter, row) =>
									String(row[filter.id]) === filter.value}
								columns={[
									{
										Header: 'Order#',
										accessor: 'order',
										sortable: false,
										filterable: false,
									},
									{
										Header: 'Customer',
										accessor: 'customer',
										sortable: true,
										filterable: true,
									},
									{
										Header: 'Date',
										accessor: 'date',
										sortable: true,
										filterable: false,
									},
									{
										Header: 'Due by',
										accessor: 'due',
										sortable: true,
										filterable: false,
									},
									{
										Header: 'Status',
										sortable: true,
										accessor: 'status',
										Cell: ({ value }) => (value === 'Reconciled' ? "Reconciled" : "In production"),
											filterMethod: (filter, row) => {
												if (filter.value === "all") {
												return true;
												}
												if (filter.value === "true") {
												return row[filter.id] === 'Reconciled';
												}
												return row[filter.id] === 'Pending';
											},
											Filter: ({ filter, onChange }) =>
												<select
												onChange={event => onChange(event.target.value)}
												style={{ width: "100%" }}
												value={filter ? filter.value : "all"}
												>
												<option value="all">Show All</option>
												<option value="true">Reconciled</option>
												<option value="false">Production</option>
												</select>
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
