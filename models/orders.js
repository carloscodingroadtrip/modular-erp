module.exports = (sequelize, DataTypes) => {
	var Order = sequelize.define(
		'Order',
		{
			orderId: {
				//Orders to begin at #100000
				type: DataTypes.INTEGER(6),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			orderDate: {
				//Deliver by date
				type: DataTypes.DATE,
				allowNull: false,
			},
			bAddress: {
				//Billing address
				type: DataTypes.STRING,
			},
			SAddress: {
				//Shipping address
				type: DataTypes.STRING,
			},
			delivery: {
				//evaluate if delivery or pickup
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: 1,
			},
			requiredby: {
				//Deliver by date
				type: DataTypes.DATE,
				allowNull: false,
			},
			note: {
				type: DataTypes.STRING,
			},
			amount: {
				//To be calculated and then saved to db
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			whoCreated: {
				//who created the order
				type: DataTypes.STRING(20),
			},
			whoUpdated: {
				//who updated the order, if any
				type: DataTypes.STRING(20),
			},
			whoDeleted: {
				//who deleted the order, if any
				type: DataTypes.STRING(20),
			},
		},
		{
			freezeTableName: true,
			timestamps: true,
		}
	);

	return Order;
};
