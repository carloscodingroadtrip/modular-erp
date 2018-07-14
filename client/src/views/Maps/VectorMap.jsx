/*eslint-disable*/
import React from 'react';
// react plugin for creating vector maps
import { VectorMap } from 'react-jvectormap';

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Heading from 'components/Heading/Heading.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

// @material-ui/icons
import ContentCopy from '@material-ui/icons/ContentCopy';
import Update from '@material-ui/icons/Update';

// core components
var mapData = {
	ES: 2,
	MX: 5,
	SV: 5,
	GT: 4,
	VE: 2,
	CL: 4,
	AR: 2,
	CO: 2,
	US: 50,
	VN: 2,
	PH: 1,
};

function VectorMaps({ ...prop }) {
	return (
		<div>
			<Heading textAlign="center" title="Our Customers" category={<span />} />
			<GridContainer>
				<GridItem xs={12}>
					<Card plain>
						<CardBody plain>
							<VectorMap
								map={'world_mill'}
								backgroundColor="transparent"
								zoomOnScroll={false}
								containerStyle={{
									width: '100%',
									height: '420px',
								}}
								containerClassName="map"
								regionStyle={{
									initial: {
										fill: '#e4e4e4',
										'fill-opacity': 0.99,
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
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
}

export default VectorMaps;
