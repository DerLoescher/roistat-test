<template>
  <li class="UserItem">
    <div class="UserItem-name">
      <span @click="openChildren">+</span>{{ user.name }}
    </div>
    <div class="UserItem-phone">{{ user.phone }}</div>
  </li>
</template>

<script>
import "./styles.scss";

export default {
  name: "UserItem",
  components: {},
  props: {
    user: { type: Object, required: true },
  },
  methods: {
    openChildren() {
      console.log(this.user.id, "ребенок открыт");
    },
  },
};
</script>
