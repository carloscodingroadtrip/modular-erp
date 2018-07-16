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

import { custData } from 'variables/general.jsx';

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
			data: custData.dataRows.map((prop, key) => {
				return {
					id: key,
					Customer: prop[0],
					Phone: prop[1],
					Balance: prop[2],
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
									console.log(obj);
									alert(
										"You've clicked EDIT button on \n{ \nProduct: " +
											obj.Product +
											', \nDescription: ' +
											obj.Description +
											'\n}'
									);
								}}
								color="success"
								className="edit"
							>
								<Change />
							</Button>
							{''}
							{/* use this button to add a edit kind of action */}
							<Button
								justIcon
								round
								simple
								onClick={() => {
									let obj = this.state.data.find(o => o.id === key);
									alert(
										"You've clicked the ASSIGNMENT button for \n{ \nProduct: " +
											obj.Product +
											', \nDescription: ' +
											obj.Description +
											'\n}'
									);
								}}
								color="warning"
								className="edit"
							>
								<Work />
							</Button>
							{''}
							{/* use this button to remove the data row */}
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
								columns={[
									{
										Header: 'Customer',
										accessor: 'Customer',
										minWidth: 400,
										filterable: true,
										placeholder: 'Search',
									},
									{
										Header: 'Phone',
										accessor: 'Phone',
										minWidth: 150,
										sortable: false,
									},
									{
										Header: 'Balance',
										accessor: 'Balance',
										sortable: false,
										maxWidth: 400,
										filterable: false,
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
