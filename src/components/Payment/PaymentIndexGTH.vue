<template>
    <NavbarBlack></NavbarBlack>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4" id="bg-img-container">
          <!-- <img src="@/assets/images/payment.webp" alt="Car image" id="payment-img" class="img-fluid lazyload mx-auto"> -->
        </div>
          
        <div class="col-md-8" id="payment-form-custom">
          <div>
            <h2 class="payment-title">{{ product.name }}</h2>
            <p class="payment-price">{{ product.price }}</p>
          </div>
          <form id="payment-form">
            <div class="form-group mb-3">
              <label for="name">Nom</label>
              <input type="text" class="form-control" id="name" required>
            </div>
            <div class="form-group mb-3">
                <label for="email">Email</label>
              <input type="email" class="form-control" id="email" required>
            </div>
            <div class="form-group mb-3">
                <label for="address_line1">Adresse</label>
              <input type="text" class="form-control" id="address_line1" required>
            </div>
            <div class="form-group mb-3">
                <label for="address_line2">Complément adresse</label>
              <input type="text" class="form-control" id="address_line2">
            </div>
            <div class="form-group mb-3">
                <label for="city">Ville</label>
              <input type="text" class="form-control" id="city" required>
            </div>
            <div class="form-group mb-3">
                <label for="state">État / Province</label>
              <input type="text" class="form-control" id="state" required>
            </div>
            <div class="form-group mb-3">
                <label for="zip">Code Postale</label>
              <input type="text" class="form-control" id="zip" required>
            </div>
            <div class="form-group mb-3">
                <label for="country">Pays</label>
              <input type="text" class="form-control" id="country" required>
            </div>
            <div class="form-group mb-3">
                <label for="card-element">Carte de crédit ou de débit</label>
              <div id="card-element" class="form-control"></div>
              <div id="card-errors" role="alert"></div>
            </div>
            <button type="submit" class="my-4 btn-custom" id="submit-button">Payer</button>
          </form>
        </div>
      </div>
    </div>
  </template>

  
  <script>
  import NavbarBlack from "@/components/Car/NavbarBlack.vue";
  import {loadStripe} from '@stripe/stripe-js/pure';
  import router from "@/router/router.js";

  
  export default {
    name: "PaymentForm",
    data() {
      return {
        product: {
          name: "NamX HUV Premium - Version GTH",
          price: "95 990 €",
        },
      };
    },
    mounted() {
      this.setupStripe();
    },
    methods: {
      async setupStripe() {
        const stripe = await loadStripe('pk_test_51MwJ69BX6URohPgMiLyBTmeuSsdFlZVXe4PMzVaJ2xXVi9muRvsur7YsRDisAr9pIibEiDqinODiwyl2uSkN0vJJ00l4Pm1QE1');
        const elements = stripe.elements();
  
        const cardElement = elements.create("card", {
          style: {
            base: {
              fontSize: "16px",
              color: "#32325d",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
              fontSmoothing: "antialiased",
              "::placeholder": {
                color: "#a0aec0",
              },
            },
            invalid: {
              color: "#fa755a",
              iconColor: "#fa755a",
            },
          },
        });
  
        cardElement.mount("#card-element");
  
        const form = document.getElementById("payment-form");
        const errorElement = document.getElementById("card-errors");
  
        form.addEventListener("submit", async (event) => {
          event.preventDefault();
          const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: {
              name: document.getElementById("name").value,
              email: document.getElementById("email").value,
                address: {
                    line1: document.getElementById("address_line1").value,
                    line2: document.getElementById("address_line2").value,
                    city: document.getElementById("city").value,
                    state: document.getElementById("state").value,
                    postal_code: document.getElementById("zip").value,
                    country: document.getElementById("country").value,
                },
            },
          });
          if (error) {
            errorElement.textContent = error.message;
          } else {
            console.log(paymentMethod);
            console.log("Payment successful");
            router.push("/success")
          }
        });
       
      },
    },
    components: {
        NavbarBlack
    }
  };
  </script>
