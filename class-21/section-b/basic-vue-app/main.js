// Get an instance of the createApp Vue object
const { createApp, ref } = Vue;

// This is where our app logic will go - in the createApp method
const app = createApp({
  setup() {
    // component logic
    const message = ref("Hello world how are you");
    // expose to the template
    return {
      message,
    };
  },
});

// Finally, we mount our app to our web page
app.mount("#app");
