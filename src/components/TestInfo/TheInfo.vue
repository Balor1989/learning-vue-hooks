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
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["name", "version"],
  setup(props) {
    return {
      newVersion: computed(() => props.version * 3),
    };
  },
};
</script>
