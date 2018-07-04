module.exports = (sequelize, DataTypes) => {
	var Customer = sequelize.define(
		'Customer',
		{
			id: {
				type: DataTypes.INTEGER(4),
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			cust_name: {
				type: DataTypes.STRING,
				allownull: false,
			},
			cust_email: {
				type: DataTypes.STRING,
				allownull: true,
			},
			cust_phone: {
				type: DataTypes.INTEGER(),
				allownull: true,
			},
			cust_fax: {
				type: DataTypes.INTEGER(),
				allownull: true,
			},
		},
		{
			freezeTableName: true,
			timestamps: true,
		}
	);
	Customer.associate = function(models) {
		Customer.hasMany(models.AddressBook, {
			as: 'customers',
			foreignKey: {
				allowNull: false,
			},
		});
	};
	return Customer;
};
