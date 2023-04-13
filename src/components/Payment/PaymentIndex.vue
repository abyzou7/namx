<template>
    <div class="container mt-5">
      <h1>Payment Form</h1>
      <div class="row">
        <div class="col-md-6">
          <form id="payment-form">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" required>
            </div>
            <div class="form-group">
              <label for="card-element">Credit or debit card</label>
              <div id="card-element" class="form-control"></div>
              <div id="card-errors" role="alert"></div>
            </div>
            <button type="submit" class="btn btn-primary" id="submit-button">Pay</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import {loadStripe} from '@stripe/stripe-js/pure'
  console.log(loadStripe);
  
  export default {
    name: "PaymentForm",
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
            },
          });
          if (error) {
            errorElement.textContent = error.message;
          } else {
            console.log(paymentMethod);
            // Submit the form
            form.submit();
          }
        });
      },
    },
  };
  </script>
  