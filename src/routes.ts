export default [
  {
    path: '/',
    redirect: '/activities',
  },
  {
    path: '/activities',
    name: 'activities',
    component: () => import('./views/Activities/ActivitiesComponent'),
  },
];
