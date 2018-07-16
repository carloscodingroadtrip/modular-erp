import Dashboard from 'views/Dashboard/Dashboard.jsx';
import Customer from 'views/Customers/index.jsx';
import ReactTables from 'views/Tables/ReactTables.jsx';
import ProductsView from 'views/Products/ProductTables.jsx';
import Charts from 'views/Charts/Charts.jsx';

// @material-ui/icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import Products from '@material-ui/icons/InvertColors';
import Customers from '@material-ui/icons/AccountCircle';
import Orders from '@material-ui/icons/Assignment';
import Timeline from '@material-ui/icons/Timeline';

var dashRoutes = [
	{ path: '/dashboard', name: 'Dashboard', icon: DashboardIcon, component: Dashboard },
	{ path: '/customers', name: 'Customers', icon: Customers, component: Customer },
	{ path: '/orders', name: 'Orders', icon: Orders, component: ReactTables },
	{ path: '/products', name: 'Products', icon: Products, component: ProductsView },
	{ path: '/reports', name: 'Reports', icon: Timeline, component: Charts },
];
export default dashRoutes;
