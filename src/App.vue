<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <hr />
      <p>
        Название: <strong>{{ name }}</strong>
      </p>
      <p>
        Версия: <strong>{{ version }}</strong>
      </p>
      <p>{{ newVersion }}</p>

      <button class="btn" @click="change">Изменить</button>
      <div class="form-control">
        <input type="text" ref="textInput" />
      </div>
    </div>

    <TheInfo @change-version="changeVersion" />
  </div>
</template>

<script>
import {
  computed,
  provide,
  reactive,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
import TheInfo from "./components/TestInfo";
export default {
  components: { TheInfo },
  setup() {
    const name = ref("VueJS");
    const version = ref(2);
    const textInput = ref(null);
    const firstName = ref("");

    // function changeInfo() {
    //   name.value = "Vue JS!";
    //   version.value = 3;
    // }
    const allVars = reactive({
      name: "VueJS",
      version: 2,
    });

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });

    function changeVersion(number) {
      version.value = number;
    }

    function changeInfo() {
      name.value = "Vue JS!";
      version.value = 3;
      console.log(textInput.value.value);
    }

    const newVersion = computed(() => {
      return version.value * 3;
    });

    // watch(newVersion, (newValue, oldValue) => {
    //   console.log(newValue);
    //   console.log(oldValue);
    // });

    provide("name", name);
    provide("version", version);

    return {
      name,
      version,
      change: changeInfo,
      allVars,
      newVersion,
      textInput,
      firstName,
      changeVersion,
    };
  },
};
</script>
