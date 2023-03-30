// Get an instance of the createApp Vue object
const { createApp, ref, reactive, computed } = Vue;

// This is where our app logic will go - in the createApp method
const app = createApp({
  setup() {
    const product = reactive({
      variants: [
        {
          name: "Cotton candy",
          imageSrc: "./images/donut-1.png",
          selectorImageSrc: "./images/variant-1.png",
          price: 10,
          stock: 10,
        },
        {
          name: "Lemon",
          imageSrc: "./images/donut-2.png",
          selectorImageSrc: "./images/variant-2.png",
          price: 20,
          stock: 0,
        },
        {
          name: "Strawberry",
          imageSrc: "./images/donut-3.png",
          selectorImageSrc: "./images/variant-3.png",
          price: 200,
          stock: 100,
        },
      ],
    });

    const selectedVariantIndex = ref(0);

    const imageSrc = ref("./images/donut-1.png");

    const productTitle = ref("Delicious Donut");

    const productDescription = ref(
      "Our delicious donuts are made with the finest ingredients and come in three irresistible flavors: cotton candy, lemon, and strawberry. Each donut is soft, fluffy, and bursting with flavor, making it the perfect treat for any occasion. "
    );

    const productDetails = ref([
      "Each donut is freshly baked and handcrafted by our expert bakers.",
      "Available in boxes of 6 or 12 donuts.",
      "Comes with a satisfaction guarantee.",
      "Lorem ipsum",
    ]);

    const productPrice = 300;

    const cart = ref(0);

    function addToCard() {
      cart.value += 1;
    }

    function updateSelectedVariantIndex(index) {
      selectedVariantIndex.value = index;
    }

    const imageSelectedSrc = computed(() => {
      return product.variants[selectedVariantIndex.value].imageSrc;
    });

    const price = computed(() => {
      return product.variants[selectedVariantIndex.value].price;
    });

    const isInStock = computed(() => {
      return product.variants[selectedVariantIndex.value].stock > 0;
    });

    // expose to the template
    return {
      cart,
      imageSrc,
      imageSelectedSrc,
      isInStock,
      price,
      product,
      productTitle,
      productDescription,
      productDetails,
      productPrice,
      addToCard,
      updateSelectedVariantIndex,
    };
  },
});

// Finally, we mount our app to our web page
app.mount("#app");
