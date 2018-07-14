import Dashboard from 'views/Dashboard/Dashboard.jsx';
import Forms from 'views/Maps/VectorMap.jsx';
import Panels from 'views/Components/Panels.jsx';
import ReactTables from 'views/Tables/ReactTables.jsx';
import ProductsView from 'views/Products/ProductTables.jsx';
import Charts from 'views/Charts/Charts.jsx';
import Widgets from 'views/Widgets/Widgets.jsx';

// @material-ui/icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import Products from '@material-ui/icons/InvertColors';
import Customers from '@material-ui/icons/AccountCircle';
import Orders from '@material-ui/icons/Assignment';
import Timeline from '@material-ui/icons/Timeline';

var dashRoutes = [
	{ path: '/dashboard', name: 'Dashboard', icon: DashboardIcon, component: Dashboard },
	{ path: '/customers', name: 'Customers', icon: Customers, component: Forms },
	{ path: '/orders', name: 'Orders', icon: Orders, component: ReactTables },
	{ path: '/products', name: 'Products', icon: Products, component: ProductsView },
	{ path: '/reports', name: 'Reports', icon: Timeline, component: Charts },
	{ redirect: true, path: '/', pathTo: '/dashboard', name: 'Dashboard' },
];
export default dashRoutes;
