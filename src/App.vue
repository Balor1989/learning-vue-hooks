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

    <TheInfo :name="name" :version="version" />
  </div>
</template>

<script>
import { computed, reactive, ref, watch } from "vue";
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

    function changeInfo() {
      name.value = "Vue JS!";
      version.value = 3;
      console.log(textInput.value.value);
    }

    const newVersion = computed(() => {
      return version.value * 3;
    });

    watch(newVersion, (newValue, oldValue) => {
      console.log(newValue);
      console.log(oldValue);
    });

    return {
      name,
      version,
      change: changeInfo,
      allVars,
      newVersion,
      textInput,
      firstName,
    };
  },
};
</script>
