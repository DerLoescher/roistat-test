<template>
  <BasicPageWrapper>
    <BasicButton>123</BasicButton>
    <UsersList :users="users" />
  </BasicPageWrapper>
</template>

<script>
import UsersList from "../../components/users-list/UsersList.vue";
import BasicButton from "../../shared/ui/basic-button/BasicButton.vue";
import BasicPageWrapper from "../../shared/ui/basic-page-wrapper/BasicPageWrapper.vue";
export default {
  name: "MainPage",
  components: { BasicPageWrapper, BasicButton, UsersList },
  data() {
    return {
      users: [
        { id: 1, name: "Петя", phone: "+79266616630", parentId: 0 },
        { id: 2, name: "Петя", phone: "+79266616630", parentId: 0 },
        { id: 3, name: "Петя", phone: "+79266616630", parentId: 0 },
        { id: 4, name: "Петя", phone: "+79266616630", parentId: 0 },
        { id: 5, name: "Петя", phone: "+79266616630", parentId: 0 },
        { id: 6, name: "Петя", phone: "+79266616630", parentId: 0 },
      ],
    };
  },
};
</script>
