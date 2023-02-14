<template>
  <TransitionGroup name="list" tag="ul" >
    <li class="car-preview" v-for="contact in contacts" :key="contact._id">
      <h1>{{ contact.name }}</h1>
      <ContactPreview :contact="contact" />
      <section class="actions">
        <RouterLink :to="`/contact/${contact._id}`">
          <button>Details</button>
        </RouterLink>
        <RouterLink :to="`/contact/edit/${contact._id}`">
          <button>Edit</button>
        </RouterLink>
        <button @click="onRemoveContact(contact._id)">Remove</button>
      </section>
    </li>
  </TransitionGroup>
</template>

<script>
import ContactPreview from "@/cmps/contact-preview.vue";
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onRemoveContact(contactId) {
      this.$emit("removeContact", contactId);
    },
  },
  components: {
    ContactPreview,
  },
};
</script>

<style lang="scss"></style>
