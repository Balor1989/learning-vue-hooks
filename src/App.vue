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
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
export default {
  setup() {
    const name = ref("VueJS");
    const version = ref(2);

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
    }

    const newVersion = computed(() => {
      return version.value * 3;
    });

    return {
      name,
      version,
      change: changeInfo,
      allVars,
      newVersion,
    };
  },
};
</script>
