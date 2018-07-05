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
				unique: true,
			},
			cust_hascredit: {
				type: DataTypes.BOOLEAN,
				allownull: false,
				defaultValue: false,
			},
			cust_creditline: {
				type: DataTypes.FLOAT,
				allownull: true,
				defaultValue: 0,
			},
			cust_balance: {
				type: DataTypes.FLOAT,
				allownull: true,
				defaultValue: 0,
			},
			cust_email: {
				type: DataTypes.STRING,
				allownull: true,
				defaultValue: 'no_email@email.com',
			},
			cust_phone: {
				type: DataTypes.STRING(20),
				allownull: true,
			},
			cust_fax: {
				type: DataTypes.STRING(20),
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
			as: 'addresses',
			allowNull: false,
		});
	};
	return Customer;
};
