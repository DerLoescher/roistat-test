<template>
  <div class="BasicInput">
    <label class="BasicInput-label" :for="name" v-if="title">{{ title }}</label>
    <input
      class="BasicInput-area"
      :type="type"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      @change="onInput($event.target.value)"
    />
  </div>
</template>

<script>
import "./styles.scss";

export default {
  name: "BasicInput",
  props: {
    modelValue: {
      type: [String, Number],
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInput(value) {
      if (value !== this.modelValue) {
        this.$emit("update:modelValue", value);
      }
    },
  },
  emits: ["update:modelValue"],
};
</script>
