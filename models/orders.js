module.exports = (sequelize, DataTypes) => {
	var Order = sequelize.define(
		'Order',
		{
			orderId: {
				type: DataTypes.INTEGER(6),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			delivery: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: 1,
			},
			requiredby: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			amount: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			who: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
			timestamps: true,
		}
	);
	Order.associate = function(models) {
		Order.belongsTo(models.Customer);
	};
	return Order;
};
