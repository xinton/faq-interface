import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'

import Topic from '@/components/TopicViews/Index'
import TopicList from '@/components/TopicViews/List'
import TopicDetail from '@/components/TopicViews/Detail'
import TopicNew from '@/components/TopicViews/New'
import TopicEdit from '@/components/TopicViews/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login/',
      name: 'login',
      component: Login
    },
    {
      path: '/faq/',
      name: 'faq',
      component: Topic,
      redirect: 'faq/list/',
      children: [
        {
          path: 'list',
          name: 'topics.list',
          props: true,
          component: TopicList
        },
        {
          path: ':id',
          name: 'topics.detail',
          props: true,
          component: TopicDetail
        },
        {
          path: 'create',
          name: 'topics.create',
          props: true,
          component: TopicNew
        },
        {
          path: ':id/edit',
          name: 'topics.edit',
          component: TopicEdit
        }
      ]
    }
  ]
})
