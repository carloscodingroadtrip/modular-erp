import Pages from 'layouts/Pages.jsx';
import Dashboard from 'layouts/Dashboard.jsx';

var indexRoutes = [
	{ path: '/pages', name: 'Login', component: Pages },
	{ path: '/', name: 'Home', component: Dashboard },
];

export default indexRoutes;
