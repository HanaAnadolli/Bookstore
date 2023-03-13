<template>
    <div class="container">
      <h2>{{ title }}</h2>
      <div class="paragraphs">
        <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
      </div>
      <button @click="redirectToContactForm">Contact Us</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: "Hey you, don't be a stranger...",
        paragraphs: [
          "The best of Book Outlet delivered straight to your inbox. Contact us to get $5 off your next " + <br/> + 
          " purchase, plus be the first to know about exclusive offers, new arrivals, and more.",
        ],
      };
    },
    methods: {
      redirectToContactForm() {
        window.location.href = "/createContacts";
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h2 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  
  .paragraphs {
    margin: 20px 0;
  }
  
  p {
    margin-bottom: 10px;
  }
  
  button {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    background-color: #be845e;
    color: #fff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  button:hover{
    background-color: #b6594c;
  }
  
  @media only screen and (min-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .paragraphs {
      max-width: 800px;
    }
  
    button {
      width: 200px;
    }
  }
  </style>
  