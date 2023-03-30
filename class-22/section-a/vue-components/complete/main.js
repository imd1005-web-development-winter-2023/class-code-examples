// Get an instance of the createApp Vue object
const { createApp, ref, reactive, computed } = Vue;

// This is where our app logic will go - in the createApp method
const app = createApp({
  setup() {
    const cart = ref(0);
    // component logic
    const message = ref("Hello world Hi there how are you today");

    function updateCart(price) {
      console.log("Add to cart", price);
      cart.value += price;
    }
    // expose to the template
    return {
      cart,
      message,
      updateCart,
    };
  },
});
