<template>
  <div>
    
    <router-view />
    <CreatePolldle />
    <CreatePolldle0ption />
    <ResultPolldle />
    <VotePolldle />
    <Footer />
  </div>
</template>

<script>
  import CreatePolldle from "@/components/CreatePolldle.vue";
  import CreatePolldle0ption from "@/components/CreatePolldle0ption.vue";
  import ResultPolldle from "@/components/ResultPolldle.vue";
  import VotePolldle from "@/components/VotePolldle.vue";
  import Footer from '@/components/Footer.vue';

export default {
  name: "App",
  components: { CreatePolldle, CreatePolldle0ption, ResultPolldle, VotePolldle, Footer}
};
</script>

<style>
</style>
