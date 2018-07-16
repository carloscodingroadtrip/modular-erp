import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CustMap from './customerMap';
import CustList from './customerTable';

class CustomersMap extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<CustList />
				<CustMap />
			</div>
		);
	}
}

CustomersMap.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default CustomersMap;
