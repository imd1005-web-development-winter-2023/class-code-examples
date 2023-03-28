const { createApp, ref, reactive, computed } = Vue;

const app = createApp({
  setup() {
    const product = reactive({
      variants: [
        {
          flavour: "Cotton candy",
          imageSrc: "./images/donut-1.png",
          selectorImageSrc: "./images/variant-1.png",
          price: 10.0,
          stock: 22,
        },
        {
          flavour: "Lemon",
          imageSrc: "./images/donut-2.png",
          selectorImageSrc: "./images/variant-2.png",
          price: 5.0,
          stock: 100,
        },
        {
          flavour: "Strawberry",
          imageSrc: "./images/donut-3.png",
          selectorImageSrc: "./images/variant-3.png",
          price: 300.0,
          stock: 0,
        },
      ],
    });

    const selectedVariantIndex = ref(0);

    const cart = ref(0);

    const productImageSrc = ref("./images/donut-3.png");

    const productTitle = ref("Delicious Donuts");

    const productDescription = ref(
      "Our delicious donuts are made with the finest ingredients and come in three irresistible flavors: cotton candy, lemon, and strawberry. Each donut is soft, fluffy, and bursting with flavor, making it the perfect treat for any occasion."
    );

    const productDetails = ref([
      "Each donut is freshly baked and handcrafted by our expert bakers.",
      "Available in boxes of 6 or 12 donuts.",
      "Comes with a satisfaction guarantee.",
      "lorem lorem lorem",
    ]);

    const productPrice = ref(23.43);

    function addToCart() {
      console.log("Added!");

      cart.value += 1;
    }

    function updateSelectedVariant(index) {
      selectedVariantIndex.value = index;
    }

    const imageSrc = computed(() => {
      return product.variants[selectedVariantIndex.value].imageSrc;
    });

    const price = computed(() => {
      return product.variants[selectedVariantIndex.value].price;
    });

    const inStock = computed(() => {
      return product.variants[selectedVariantIndex.value].stock > 0;
    });

    return {
      // exposed to template
      imageSrc,
      cart,
      price,
      inStock,
      productTitle,
      productDescription,
      productDetails,
      productPrice,
      productImageSrc,
      product,
      addToCart,
      updateSelectedVariant,
    };
  },
});

// Finally, we mount our app to our web page
app.mount("#app");
