import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/auth/Login.vue';
import POSAuth from '@/views/pos/auth/index.vue';
import ForgotPassword from '@/views/auth/ForgotPassword.vue';
import Auth from '@/components/layouts/Auth.vue';
import Signup from '@/views/auth/Signup.vue';
import ResetPassword from '@/views/auth/ResetPassword.vue';
import NotFound from '@/views/NotFound.vue';
import LinkTree from '@/views/LinkTree.vue';
import Main from '@/components/layouts/Main.vue';
import POS from '@/components/pos_layouts/Main.vue';
import { useAuthStore } from '@/stores/auth';

const authRequired = (to, from, next) => {
	const auth = useAuthStore();
	const authorized = auth.user ? next() : next({ name: 'login' });
};

const noAuthRequired = (to, from, next) => {
	const auth = useAuthStore();
	const unauthorized = auth.user ? next({ name: 'dashboard' }) : next();
};

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'pos',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: POS,
			children: [
				{
					path: '',
					name: 'pos.auth',
					component: POSAuth,
				},
			],
		},
		{
			path: '/auth',
			name: 'auth',
			component: Auth,
			beforeEnter: noAuthRequired,
			children: [
				{
					path: 'login',
					name: 'login',
					component: Login,
				},
				{
					path: 'forgot_password',
					name: 'forgot-password',
					component: ForgotPassword,
				},
				{
					path: 'signup',
					name: 'signup',
					component: Signup,
				},
				{
					path: 'reset_password/:resetToken',
					name: 'reset-password',
					component: ResetPassword,
				},
			],
		},
		{
			path: '/admin',
			name: 'admin',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: Main,
			beforeEnter: authRequired,
			children: [
				{
					path: 'dashboard',
					name: 'dashboard',
					component: () => import('../views/admin/Dashboard.vue'),
				},
				{
					path: 'settings/manage-account',
					name: 'settings.manage-account',
					component: () =>
						import('../views/admin/settings/ManageAccount.vue'),
				},
				{
					path: 'sales/customers',
					name: 'sales.customers',
					component: () =>
						import('../views/admin/customer/index.vue'),
				},
				{
					path: 'sales/customers/create',
					name: 'sales.customers.create',
					component: () =>
						import('../views/admin/customer/create.vue'),
				},
				{
					path: 'sales/customers/edit/:id',
					name: 'sales.customers.edit',
					component: () => import('../views/admin/customer/edit.vue'),
				},
				{
					path: 'warehouse/products',
					name: 'warehouse.products',
					component: () => import('../views/admin/product/index.vue'),
				},
				{
					path: 'warehouse/products/create',
					name: 'warehouse.products.create',
					component: () =>
						import('../views/admin/product/create.vue'),
				},
				{
					path: 'warehouse/products/edit/:id',
					name: 'warehouse.products.edit',
					component: () => import('../views/admin/product/edit.vue'),
				},
				{
					path: 'warehouse/collections',
					name: 'warehouse.collections',
					component: () =>
						import('../views/admin/collection/index.vue'),
				},
				{
					path: 'warehouse/collections/create',
					name: 'warehouse.collections.create',
					component: () =>
						import('../views/admin/collection/create.vue'),
				},
				{
					path: 'warehouse/collections/edit/:id',
					name: 'warehouse.collections.edit',
					component: () =>
						import('../views/admin/collection/edit.vue'),
				},
				{
					path: 'sales/discounts',
					name: 'sales.discounts',
					component: () =>
						import('../views/admin/discount/index.vue'),
				},
				{
					path: 'sales/discounts/create',
					name: 'sales.discounts.create',
					component: () =>
						import('../views/admin/discount/create.vue'),
				},
				{
					path: 'sales/discounts/edit/:id',
					name: 'sales.discounts.edit',
					component: () => import('../views/admin/discount/edit.vue'),
				},
				{
					path: 'sales/orders',
					name: 'sales.orders',
					component: () => import('../views/admin/order/index.vue'),
				},
				{
					path: 'sales/orders/create',
					name: 'sales.orders.create',
					component: () => import('../views/admin/order/create.vue'),
				},
				{
					path: 'sales/orders/edit/:id',
					name: 'sales.orders.edit',
					component: () => import('../views/admin/order/edit.vue'),
				},
				{
					path: 'ecomm/media',
					name: 'ecomm.media',
					component: () => import('../views/admin/media/index.vue'),
				},
				{
					path: 'warehouse/categories',
					name: 'warehouse.categories',
					component: () =>
						import('../views/admin/category/index.vue'),
				},
				{
					path: 'warehouse/categories/create',
					name: 'warehouse.categories.create',
					component: () =>
						import('../views/admin/category/create.vue'),
				},
				{
					path: 'warehouse/categories/edit/:id',
					name: 'warehouse.categories.edit',
					component: () => import('../views/admin/category/edit.vue'),
				},
			],
		},
		{ path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
		{ path: '/links', name: 'link-tree', component: LinkTree },
	],
});

export default router;
