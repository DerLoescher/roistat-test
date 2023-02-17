<template>
  <div class="NewUserForm">
    <BasicInput
      :name="'name'"
      :title="'Имя'"
      :type="'name'"
      :placeholder="'Иван Иванов'"
      v-model="form.name"
    />
    <PhoneInput
      :name="'phone'"
      :title="'Телефон'"
      :placeholder="'+7 (___) ___-__-__'"
      isRequired
      v-model="form.phone"
    />
    <BasicSelect
      v-if="usersList.length"
      :name="'parent'"
      :title="'Начальник'"
      :options="usersList"
      v-model="form.parentId"
    />
    <span class="NewUserForm-error" v-if="formNotFulfilled"
      >Заполните имя и телефон</span
    >
    <BasicButton @click="submitForm" :title="'Сохранить'" />
  </div>
</template>

<script>
import BasicButton from "../../shared/ui/basic-button/BasicButton.vue";
import BasicSelect from "../../shared/ui/basic-select/BasicSelect.vue";
import PhoneInput from "../phone-input/PhoneInput.vue";
import BasicInput from "../../shared/ui/basic-input/BasicInput.vue";
import "./styles.scss";

export default {
  name: "NewUserForm",
  components: { BasicInput, PhoneInput, BasicSelect, BasicButton },
  props: {
    idCount: {
      type: Number,
      required: true,
    },
    usersList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      form: {
        id: null,
        name: "",
        phone: "",
        parentId: null,
      },
      formNotFulfilled: false,
    };
  },
  methods: {
    submitForm() {
      this.form.id = this.idCount;
      for (let key in this.form) {
        if (this.form[key] === "") {
          this.formNotFulfilled = true;
          return;
        }
      }
      this.form.children = [];
      this.$emit("addNewUser", this.form);
      this.formNotFulfilled = false;
    },
  },
};
</script>
