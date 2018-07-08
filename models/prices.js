module.exports = (sequelize, DataTypes) => {
	var Price = sequelize.define(
		'Price',
		{
			id: {
				type: DataTypes.INTEGER(6),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			price: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			who: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
			timestamps: true,
		}
	);
	Price.associate = function(models) {
		Price.belongsTo(models.Product, {
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
			foreignKey: 'ProductId',
		});
	};
	return Price;
};
