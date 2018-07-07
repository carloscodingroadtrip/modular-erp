module.exports = (sequelize, DataTypes) => {
	var Product = sequelize.define(
		'Product',
		{
			productId: {
				type: DataTypes.STRING(40),
				allowNull: false,
				primaryKey: true,
			},
			desc: {
				type: DataTypes.STRING(250),
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
			timestamps: false,
		}
	);

	Product.associate = function(models) {
		Product.hasMany(models.Price, {
			foreignKey: 'ProductId',
			allowNull: false,
		});
	};
	return Product;
};
