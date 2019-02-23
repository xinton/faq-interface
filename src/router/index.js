import Vue from 'vue'
import Router from 'vue-router'
import TopicList from '@/components/TopicList'
import TopicDetail from '@/components/TopicDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopicList',
      component: TopicList
    },
    {
      path: '/:id',
      name: 'TopicDetail',
      props: true,
      component: TopicDetail
    }
  ]
})
