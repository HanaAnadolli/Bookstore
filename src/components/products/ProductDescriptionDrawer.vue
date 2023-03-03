<template>
    <div class="drawer-background" :class="{show: active}" @click="$emit('close-product-drawer')"/>

    <div class="drawer" :class="{show: active}">
        <div class="drawer-close" @click="$emit('close-product-drawer')">
        X
        </div>

        <div v-for="book in Books" :key="book._id" class="product-details">
            <!-- <img v-bind:src=" product.img ">  -->
            <h5 class="card-title">{{ book.name }}</h5>
            <h5 class="card-author">{{book.author}}</h5>
            <h5 class="card-price">{{ book.price}}</h5>
     
        <p class="description">{{ book.description }}</p>
        <h3 class="text-center">{{ book.price.toFixed(2) }}</h3>
        <div class="cart-total" v-if="book_total">
            <h3>In Cart</h3>
            <h4>{{ book_total }}</h4>
        </div>

        <div class="button-container">
            <button class="remove">Remove</button>
            <button class="add">Add</button>
        </div>
        </div>
    </div>

</template>

<script>
 
 import axios from "axios"; 
export default {
     
    props:['product','active'],
    computed:{
        book_total(){
            return 56.00
        }
    },
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
.drawer-background{
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #9099A2;
    z-index: 100;
    display: none;
    transition: display 0.5s;

    &.show{
        display: block;
    }
}
.drawer{
    width: 95vw;
    height: 100vh;
    background-color: white;
    position: fixed;
    top: 0;
    left: -105vw;
    padding: 15px;
    transition: left .5s;
    z-index: 101;
    overflow-y:scroll;

    &.show{
        left: 0;
    }
}

.drawer-close{
    font-size: 1.5rem;
    padding: 5px;
    border-radius: 5px;
    right: 10px;
    border: 2px solid gray;
    color: gray;
    width: 50px;
    float:right ;
    cursor: pointer;


    &:hover{
        background-color: #9099A2;
    }
}
.product-details{
    display: flex;
    justify-content: left;
    flex-direction: column;

    p.description{
        padding: 20px;
        line-height: 1.5rem;
    }
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
    .button-container{
        button{
            width: 150px;
            border: none;
            padding: 10px;
            border-radius: 5px;
            margin:  0 5px 50px 5px;
            cursor: pointer;
        }
    }
}

@media(min-width: 500px){
    .drawer{
        width: 450px;
    }
}
</style>
