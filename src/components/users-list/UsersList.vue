<template>
  <div class="UsersList-wrapper">
    <ul class="UsersList">
      <UserItem v-for="user in users" :key="user.id" :user="user" />
    </ul>
  </div>
</template>

<script>
import UserItem from "../user-item/UserItem.vue";
import "./styles.scss";

export default {
  name: "UsersList",
  components: { UserItem },
  props: {
    users: { type: Array, default: () => [] },
  },
};
</script>
