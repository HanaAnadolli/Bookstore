<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">Create Book</h3>
        <form @submit.prevent="handleSubmitForm">
          <div class="form-group">
            <label>IMG</label>
            <input
              type="text"
              class="form-control"
              v-model="book.img"
              required
            />
          </div>
  
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              v-model="book.name"
              required
            />
          </div>
  
          <div class="form-group">
            <label>Author</label>
            <input
              type="text"
              class="form-control"
              v-model="book.author"
              required
            />
          </div>
          
          <div class="form-group">
            <label>Price</label>
            <input
              type="text"
              class="form-control"
              v-model="book.price"
              required
            />
          </div>

          <div class="form-group">
            <label>Category</label>
            <input
              type="text"
              class="form-control"
              v-model="book.category"
              required
            />
          </div>

          <div class="form-group">
            <label>Description</label>
            <input
              type="text"
              class="form-control"
              v-model="book.description"
              required
            />
          </div>
          <div class="form-group">
            <button class="btn btn-danger btn-block">Create</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        book: {
          img:"",
          name:"",
          author:"",
          price:"",
          category:"",
          description:""
        },
      };
    },
    methods: {
      handleSubmitForm() {
        let apiURL = "http://localhost:4000/api/create-book";
  
        axios
          .post(apiURL, this.book)
          .then(() => {
            this.$router.push("/view");
            this.book = {
                img:"",
                name:"",
                author:"",
                price:"",
                category:"",
                description:""
            };
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  