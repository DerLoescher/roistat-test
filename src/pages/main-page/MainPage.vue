<template>
  <BasicPageWrapper>
    <BasicButton :title="'Добавить'" @click="onOpenModal"></BasicButton>
    <UsersList :users="usersTree" @sortUsers="onSortUsers" />
    <BasicModal @closeModal="onCloseModal" v-if="modalIsOpen">
      <template #header>Добавление пользователя</template>
      <template #content>
        <NewUserForm
          :idCount="currentUserId"
          :usersList="users"
          @addNewUser="addNewUser"
        />
      </template>
    </BasicModal>
  </BasicPageWrapper>
</template>

<script>
import NewUserForm from "../../components/new-user-form/NewUserForm.vue";
import BasicModal from "../../shared/ui/basic-modal/BasicModal.vue";
import UsersList from "../../components/users-list/UsersList.vue";
import BasicButton from "../../shared/ui/basic-button/BasicButton.vue";
import BasicPageWrapper from "../../shared/ui/basic-page-wrapper/BasicPageWrapper.vue";

export default {
  name: "MainPage",
  components: {
    BasicPageWrapper,
    BasicButton,
    UsersList,
    BasicModal,
    NewUserForm,
  },
  data() {
    return {
      users: JSON.parse(localStorage.getItem("users")),
      usersTree: [],
      modalIsOpen: false,
      formIsNotFulfilled: false,
      testResult: null,
    };
  },
  computed: {
    currentUserId() {
      return this.users.length + 1;
    },
    usersArrayLength() {
      return this.users.length;
    },
  },
  methods: {
    onCloseModal() {
      this.modalIsOpen = false;
    },
    onOpenModal() {
      this.modalIsOpen = true;
    },
    addNewUser(userForm) {
      this.users.push(userForm);
      this.onCloseModal();
    },
    onSortUsers(sortProp) {
      if (sortProp) {
        this.users.sort(function (a, b) {
          if (a[sortProp] < b[sortProp]) {
            return -1;
          }
          if (a[sortProp] > b[sortProp]) {
            return 1;
          }
          return 0;
        });
      } else {
        return this.users;
      }
    },
    listToTree(items) {
      function nest(items, id = null, link = "parentId") {
        return items
          .filter((item) => item[link] == id)
          .map((item) => ({ ...item, children: nest(items, item.id) }));
      }

      return nest(items);
    },
  },
  mounted() {
    this.usersTree = this.listToTree(this.users);
  },
  watch: {
    users: {
      handler: function (newVal) {
        localStorage.setItem("users", JSON.stringify(newVal));
        this.usersTree = this.listToTree(newVal);
      },
      deep: true,
    },
  },
};
</script>
