import Pages from 'layouts/Pages.jsx';
import Dashboard from 'layouts/Dashboard.jsx';

var indexRoutes = [
	{ path: '/login', name: 'Login', component: Pages },
	{ path: "/", name: "Dashboard", component: Dashboard },

];

export default indexRoutes;
