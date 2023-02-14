<template>
  <TransitionGroup name="list" tag="ul" class="contact-list">
    <div class="contact-container"  v-for="contact in contacts" :key="contact._id">
      <ContactPreview :contact="contact" @onRemoveContact="onRemoveContact"/>
    </div>
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
