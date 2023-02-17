<template>
  <div class="BasicSelect">
    <label class="BasicSelect-label" :for="name">{{ title }}</label>
    <select
      class="BasicSelect-area"
      :name="name"
      @change="onSelect($event.target.value)"
      :value="modelValue"
    >
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
import "./styles.scss";

export default {
  name: "BasicSelect",
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
    options: {
      type: Array,
      required: true,
    },
    defaultValue: {
      type: Number,
      default: null,
    },
  },
  methods: {
    onSelect(value) {
      if (value !== this.modelValue) {
        this.$emit("update:modelValue", value);
      }
    },
  },
  emits: ["update:modelValue"],
};
</script>
