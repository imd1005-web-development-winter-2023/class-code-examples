const { createApp, reactive, computed, ref } = Vue;

const app = createApp({
  setup() {
    // Vue ref to keep track of the cart values
    // We've upgraded our cart to not just
    // keep a number of items,
    // But rather an array of products
    // Initial value is an empty array
    const cart = ref([]);

    // Vue ref to keep track of the products that are loaded from the data file
    // Initial value is an empty array until the fetch runs
    const products = ref([]);

    // The path to the data file that holds all of our donut data
    const dataFilePath = "./data/donuts.json";

    // We use fetch() API to grab all of our
    // donuts data when our component loads
    //
    // The fetch() API requires two "then" functions,
    // one to run the request and the second to unpack the stream of data
    // it's during the second then that we actually set the
    // donuts array that comes from donuts.json to our
    // Vue ref object (using the value property)
    //
    // When Vue sees a change to the products ref it
    // auto magically re-renders our page with the new
    // products data
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    fetch(dataFilePath)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        products.value = data;
      });

    // Since I didn't create components, I need a way to tell me
    // if a product is in or out of stock
    // Decided just to use a function call and pass in the index
    // of the product array
    // products.value[0] = cotton candy donut
    // products.value[1] = lemon
    // products.value[2] = strawberry
    function isInStock(index) {
      return products.value[index].stock > 0;
    }

    // Cart data structure:
    // An array of donuts and quantities
    // [
    //   {
    //     title: "Strawberry",
    //     quantity: 10
    //   }
    // ]
    function addToCart(index) {
      // Check if the cart array has our product already
      // in the array. We use the title as "key" to try to find it
      // in the carts array
      const foundIndex = cart.value.findIndex(
        (element) => element.title === products.value[index].title
      );

      // Didnt find it in the cart array so let's add a
      // new entry to the cart
      if (foundIndex === -1) {
        cart.value.push({
          title: products.value[index].title,
          quantity: 1,
        });
      } else {
        // We found it in the cart array
        // Now we just need to increment the
        // Quanitity value
        cart.value[foundIndex].quantity += 1;
      }

      // Decrement the stock value
      products.value[index].stock -= 1;

      console.log("Cart contents", cart.value);
    }

    // We need to walk through all of the
    // cart items and add up the quantity values
    // to get the actual total quantity in the cart
    const itemsInCart = computed(() => {
      // If the cart is empty just return zero
      if (cart.value.length === 0) {
        return 0;
      }

      // If the cart has objects in it we need to loop through them
      let quantity = 0;

      cart.value.forEach((cartItem) => {
        quantity += cartItem.quantity;
      });

      return quantity;
    });

    // Vue requires us to return
    // all of the objects
    // that we use in our templates
    return {
      cart,
      products,
      itemsInCart,
      isInStock,
      addToCart,
    };
  },
});

app.mount("#app");
