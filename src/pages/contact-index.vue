<template>
  <div class="add-contact">
    <RouterLink to="/contact/edit">Add new contact</RouterLink>
  </div>
  <ContactList @removeContact="removeContact" :contacts="contactsToShow" />
</template>

<script>
import ContactList from "@/cmps/contact-list.vue";
import { eventBus } from "../services/eventBus.service.js";

export default {
  async created() {
    this.$store.dispatch({ type: "loadContacts" });
  },
  methods: {
    async removeContact(contactId) {
      const msg = {
        txt: `Contact deleted`,
        type: "success",
      };
      try {
        this.$store.dispatch({ type: "removeContact", contactId });
      } catch (err) {
        throw err;
      }
      eventBus.emit("user-msg", msg);
    },
  },
  computed: {
    contactsToShow() {
      return this.$store.state.contactStore.contacts;
      // return this.$store.getters.contacts
    },
  },
  components: {
    ContactList,
  },
};
</script>
