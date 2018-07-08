module.exports = (sequelize, DataTypes) => {
	var Product = sequelize.define(
		'Product',
		{
			productId: {
				type: DataTypes.STRING(40),
				allowNull: false,
				primaryKey: true,
				unique: true,
			},
			desc: {
				type: DataTypes.STRING(250),
				allowNull: false,
			},
			who: {
				type: DataTypes.STRING(200),
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
			as: 'pricing',
			allowNull: false,
		});
	};
	return Product;
};
