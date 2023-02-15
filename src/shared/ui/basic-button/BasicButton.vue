<template>
  <button
    class="BasicButton"
    :style="{ 'background-color': color }"
    @click="clickBtn"
  >
    <span class="BasicButton-title">{{ title }}</span>
  </button>
</template>

<script>
import "./styles.scss";

export default {
  name: "BasicButton",
  props: {
    title: {
      type: String,
      default: "click me",
    },
    color: {
      type: String,
      default: "#dddddd",
    },
  },
  methods: {
    clickBtn() {
      this.$emit("clickButton");
    },
  },
};
</script>
