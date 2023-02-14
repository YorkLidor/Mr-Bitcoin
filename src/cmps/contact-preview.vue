<template>
  <div class="card">
    <div class="box">
      <div class="content">
        <h3>{{ contact.name }}</h3>
        <img :src="'https://robohash.org/set_set3/' + contact._id" />
        <RouterLink :to="`/contact/${contact._id}`"> Details </RouterLink>
        <RouterLink :to="`/contact/edit/${contact._id}`"> Edit </RouterLink>
        <a @click="remove(contact._id)">Remove</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  methods: {
    remove(contactId) {
      this.$emit("onRemoveContact", contactId);
    },
  },
};
</script>
