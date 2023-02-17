<template>
  <div class="UsersList-wrapper">
    <ul class="UsersList">
      <li class="UsersList-header">
        <div @click="sortUsers('name')">Имя</div>
        <div @click="sortUsers('phone')">Телефон</div>
      </li>
      <li class="UsersList-empty" v-if="!users.length">
        <div>Ни одного пользователя еще не добавлено</div>
      </li>
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
  methods: {
    sortUsers(prop) {
      this.$emit("sortUsers", prop);
    },
  },
};
</script>
