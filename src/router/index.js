import Vue from 'vue'
import Router from 'vue-router'

import CreatePolldle from "@/components/CreatePolldle.vue";
import ResultPolldle from "@/components/ResultPolldle.vue";
import VotePolldle from "@/components/VotePolldle.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '@/components/poll1.vue',
      name: 'CreatePolldle',
      component: CreatePolldle
    },
    {
      path: '@/components/poll4.vue',
      name: 'VotePolldle',
      component: VotePolldle
    },
    {
      path: '@/components/poll3.vue',
      name: 'ResultPolldle',
      component: ResultPolldle
    }
  ]
})