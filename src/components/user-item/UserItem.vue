<template>
  <li class="UserItem">
    <div class="UserItem-name">
      <span
        class="UserItem-btn"
        @click="openChildren"
        v-if="user.children.length"
      >
        +
      </span>
      {{ user.name }}
    </div>
    <div class="UserItem-phone">{{ user.phone }}</div>
  </li>
  <template v-if="user.children.length && childrenView">
    <div class="UserItem-child">
      <UserItem :user="child" v-for="child in user.children" :key="child.id" />
    </div>
  </template>
</template>

<script>
import UserItem from "./UserItem.vue";
import "./styles.scss";

export default {
  name: "UserItem",
  components: { UserItem },
  data() {
    return {
      childrenView: false,
    };
  },
  props: {
    user: { type: Object, required: true },
  },
  methods: {
    openChildren() {
      this.childrenView = true;
    },
  },
};
</script>

<style scoped>
.UserItem-child {
  width: 95%;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
}
</style>
