// Get an instance of the createApp Vue object
const { createApp, reactive } = Vue;

// This is where our app logic will go - in the createApp method
const app = createApp({
  setup() {
    // component logic
    const state = reactive({ count: 0 });

    // expose to the template
    return {
      state,
    };
  },
});

// Finally, we mount our app to our web page
app.mount("#app");
