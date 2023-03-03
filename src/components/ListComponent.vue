<template>
  <div class="card" >
   <div class="card-body">
            <tr v-for="book in Books" :key="book._id">
               <img class="card-img-top" >  
              <h5 class="card-title">{{ book.name }}</h5>
              <h5 class="card-author">{{book.author}}</h5>
              <h5 class="card-price">{{ book.price}}</h5>
              <router-link :to="{ name: 'shop' }">Testb</router-link>
              <button class="view-product-button" @click="$emit('view-product',book)">View Product</button>
             
          <div class="buttons">
                <router-link
                  :to="{ name: 'edit', params: { id: book._id } }"
                  class="btn btn-success"
                  >Edit
                </router-link>
                <button
                  @click.prevent="deleteBook(book._id)"
                  class="btn btn-danger" style="margin-left:10px;"
                >
                  Delete
                </button>
            </div>
           
            </tr>
          </div>
          
    </div> 
    
  </template>
  
  <script>
  import axios from "axios"; 
  //import ProductDescriptionDrawer from "./products/ProductDescriptionDrawer.vue";
  
  export default {
    data() {
      return {
        Books: [],
      };
    },  
  
    created() {
      let apiURL = "http://localhost:4000/api";
      axios
        .get(apiURL)
        .then((res) => {
          this.Books = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
      deleteBook(id) {
        let apiURL = `http://localhost:4000/api/delete-book/${id}`;
        let indexOfArrayItem = this.Books.findIndex((i) => i._id === id);
  
        if (window.confirm("Do you really want to delete?")) {
          axios
            .delete(apiURL)
            .then(() => {
              this.Books.splice(indexOfArrayItem, 1);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      },
      
    },
  };
  </script>
  
  <style lang="scss">
  .buttons{
    padding-top: 10px;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.15rem;
    border-radius: 5px;
    cursor: pointer;
  }
  
      .card{
          
          padding: 10px;
          border-radius: 5px;
          background-color: white;
          box-shadow: 0 0 5px #9099A2;
          text-align: left;
          .card-title{
              font-weight: bolder;
          }
          .card-author{
              font-weight: bold;
              color: #9099A2;
          }
          .card-price{
              font-weight: bolder;
              padding-top: 20px;
          }
          h5.price{
              color: gray;
          }
  
          p.description{
              font-size: 0.85rem;
          }
  
          p.text-muted{
              color: gray;
          }
  
          button.view-product-button{
              padding: 10px;
              background-color: #9099A2;
              border: none;
              color: white;
              font-weight: bold;
              font-size: 1.15rem;
              border-radius: 5px;
              cursor: pointer;
          }
      }
  
      @media(min-width: 500px){
          .card{
              width: 350px;
              margin: 10px;
          }
      }
  </style>
  