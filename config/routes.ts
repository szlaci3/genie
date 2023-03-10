export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: './404',
    layout: false,
  },
  {
    path: '/',
    layout: false,
    component: '@/layouts/BasicLayout',
    authority: ['admin', 'user'],
    routes: [
      { path: '/', redirect: '/index' },
      {
        path: '/index',
        name: 'Index',
        component: './Index',
        icon: 'smile',
      },
      { path: '/', exact: false, redirect: '/404' },
    ]
  },
];
