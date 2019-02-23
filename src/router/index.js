import Vue from 'vue'
import Router from 'vue-router'
import TopicList from '@/components/TopicViews/List'
import TopicDetail from '@/components/TopicViews/Detail'
import TopicNew from '@/components/TopicViews/New'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'topics.list',
      component: TopicList
    },
    {
      path: '/:id',
      name: 'topics.detail',
      props: true,
      component: TopicDetail
    },
    {
      path: '/create',
      name: 'topics.create',
      props: true,
      component: TopicNew
    }
  ]
})
