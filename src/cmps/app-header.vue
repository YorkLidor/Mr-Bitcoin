<template>
  <header class="app-header">
    <div class="logo-container"><span>M.r Bitcoin</span></div>
    <div class="stats-container">
      <span v-if="loggedInUser">Hello {{ loggedInUser.name }}</span>
      <span v-if="rate">BTC Rate: ${{ rate }}</span>
      <span v-else>Getting rate...</span>
    </div>
    <nav class="links-container">
      <RouterLink to="/" active-class="active">Home</RouterLink>
      <!-- <RouterLink to="/car">Cars</RouterLink> -->
      <RouterLink to="/contact" active-class="active">Contacts</RouterLink>
      <RouterLink to="/statistics" active-class="active">Statistics</RouterLink>
      <RouterLink to="/about" active-class="active">About</RouterLink>
    </nav>
  </header>
</template>

<script>
import { userService } from "@/services/user.service.js";
export default {
  data() {
    return {
      loggedInUser: null,
    };
  },
  async created() {
    this.$store.dispatch({ type: "loadRate" });
    this.loggedInUser = await userService.getUser();
  },
  methods: {
    getBtcRate() {
      this.$store.dispatch({});
    },
  },
  computed: {
    rate() {
      return this.$store.state.bitcoinStore.rate;
    },
  },
};
</script>
