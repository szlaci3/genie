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
      { path: '/', redirect: '/welcome' },
      {
        path: '/welcome',
        name: 'welcome',
        component: './Welcome',
        icon: 'smile',
      },
      {
        path: '/admin',
        name: 'admin',
        access: 'canAdmin',
        component: './Admin',
        icon: 'table',
        routes: [
          {
            path: '/admin/sub-page',
            name: 'sub-page',
            component: './Welcome',
          },
        ],
      },
      {
        name: 'list.table-list',
        path: '/list',
        component: './TableList/TableList',
        icon: 'smile',
      },
      {
        name: 'play',
        path: '/play/:id',
        component: './Play/Play',
        icon: 'table',
      },
      { path: '/', exact: false, redirect: '/404' },
    ]
  },
];
