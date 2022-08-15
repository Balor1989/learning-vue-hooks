<template>
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
      <label for="firstName">First Name</label>
      <input type="text" id="firstName" v-model="firstName" />
    </div>
    <button class="btn warning" @click="changeVersion">Изменить версию</button>
  </div>
</template>

<script>
import { computed, inject } from "vue";
export default {
  // props: ["name", "version"],
  emits: ["change-version"],
  setup(props, context) {
    function change() {
      context.emit("change-version", 2);
    }

    const version = inject("version");

    return {
      name: inject("name"),
      changeVersion: change,
      version,
      newVersion: computed(() => version.value * 3),
    };
  },
};
</script>
