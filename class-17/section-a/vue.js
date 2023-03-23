const { createApp, ref } = Vue;

createApp({
  setup() {
    let message = ref("Hello world");

    // component logic
    // declare some reactive state here.
    function buttonClick() {
      console.log("Button clicked!");

      message.value = "Update Hello World!";
    }

    return {
      // exposed to template
      buttonClick,
      message,
    };
  },
}).mount("#app");
