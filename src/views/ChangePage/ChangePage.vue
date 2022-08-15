<template>
  <div class="card">
    <h2>Change Page</h2>

    <button class="btn primary" @click="toggleMessage">
      {{ message ? "Hide" : "Show" }}
    </button>
    <button class="btn" @click="navigate">Homepage</button>
  </div>
  <div class="card" v-if="message">
    <h3>This is message</h3>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const message = ref(false);
    const router = useRouter();
    const route = useRoute();
    console.log(route.path);
    const navigate = () => {
      router.push("/");
    };

    const toggleMessage = () => {
      message.value = !message.value;
    };

    return {
      message,
      navigate,
      toggleMessage,
    };
  },
};
</script>
