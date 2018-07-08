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
			whoCreated: {
				type: DataTypes.STRING(30),
			},
			whoUpdated: {
				type: DataTypes.STRING(30),
			},
		},
		{
			freezeTableName: true,
			timestamps: true,
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
