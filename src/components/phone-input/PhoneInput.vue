<template>
  <div class="PhoneInput">
    <label class="PhoneInput-label" :for="name" v-if="title">{{ title }}</label>
    <input
      class="PhoneInput-area"
      type="tel"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      v-phone
      @change="onInput($event.target.value)"
    />
  </div>
</template>

<script>
import "./styles.scss";

export default {
  name: "PhoneInput",
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
    isRequired: {
      type: Boolean,
      default: false,
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
