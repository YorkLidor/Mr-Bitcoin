<script>
import AppHeader from "@/cmps/app-header.vue";
import AppFooter from "@/cmps/app-footer.vue";
import UserMsg from "./cmps/user-msg.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    UserMsg,
  },
};
</script>

<template>
  <div class="app ">
    <AppHeader />
    <main class="app-main-container main-layout">
      <RouterView />
    </main>
    <AppFooter />
    <UserMsg />
  </div>
</template>


