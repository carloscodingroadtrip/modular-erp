module.exports = (sequelize, DataTypes) => {
	var LineOrderDetail = sequelize.define(
		'LineOrderDetail',
		{
			lineid: {
				type: DataTypes.INTEGER(6),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
		},
		{
			freezeTableName: true,
			timestamps: true,
		}
	);
	LineOrderDetail.associate = function(models) {
		LineOrderDetail.belongsTo(models.Order, {
			onDelete: 'CASCADE',
			foreignKey: 'OrderId',
			// constraints: false,
			allowNull: false,
		});
		LineOrderDetail.belongsTo(models.Product, {
			onDelete: 'CASCADE',
			foreignKey: 'ProductId',
			// constraints: false,
			allowNull: false,
		});
	};
	return LineOrderDetail;
};
