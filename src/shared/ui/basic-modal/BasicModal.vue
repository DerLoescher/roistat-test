<template>
  <teleport to="body">
    <div class="BasicModal" @click="closeModal">
      <div class="BasicModal-window" @click.stop>
        <p class="BasicModal-header">
          <slot name="header"></slot>
          <button class="BasicModal-close_btn" @click="closeModal">х</button>
        </p>
        <div class="BasicModal-content">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import "./styles.scss";

export default {
  name: "BasicModal",
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
  emits: ["closeModal"],
};
</script>
