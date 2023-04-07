const { createApp, reactive, computed, ref } = Vue;

const app = createApp({
  setup() {
    // Vue requires us to return
    // all of the objects
    // that we use in our templates
    return {};
  },
});

app.mount("#app");
