/**
 * @author lsz
 * @desc 路由配置信息
 */
import Vue from 'vue';
import Router from 'vue-router';

/* 子路由注册 */
// import app1Routers from '@/components/app/app1/router.js';
import app2Routers from '@/components/app/app2/router.js';

/* 一级视图路由配置 */
// let app1 = r => require.ensure([], () => r(require(`../components/app/app1/App`)), `app/app1`);
let app2 = r => require.ensure([], () => r(require(`../components/app/app2/App`)), `app/app2`);

Vue.use(Router);
let baseUrl = '/:userId/:dataType/'; // 基路径

// 路由配置信息
export default new Router({
  routes: [
    // {
    //   path: `${baseUrl}1`,
    //   name: '1',
    //   component: app1,
    //   children: app1Routers
    // },
    {
      path: `${baseUrl}1`,
      name: '2',
      component: app2,
      children: app2Routers
    }
  ]
});
