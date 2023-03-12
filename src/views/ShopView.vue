<template>
  <Header />
    <div class="home">
      <ProductDescriptionDrawer 
        :product= "book"
        :active = "active.product_drawer"
        v-on:close-product-drawer="closeProductDrawer" />
        <div class="product-cards-container">
            <ProductSummaryCard 
             :product="book"
             v-on:view-product="viewProduct($event)"/>
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios"; 
import ProductSummaryCard from '../components/products/ProductSummaryCard.vue'
import ProductDescriptionDrawer from '../components/products/ProductDescriptionDrawer.vue'

// export default{ 
//     name:'Shop',
//     components:{
        
//         ProductSummaryCard,
//         ProductDescriptionDrawer
//     },
//     data(){
//         return{
//             search:"",
//             items:items,
//             product:null,
//             active:{
//                 product_drawer:false
//             }
//         }
//     },
//     methods:{
//         viewProduct(product){
//             this.product = product
//             this.active.product_drawer = true
//             console.log(product)
//         },
//         closeProductDrawer(){
//             this.active.product_drawer = false
//         }
    
//     }
// }  




export default {
    name:'Shop',
    components:{
        ProductSummaryCard,
        ProductDescriptionDrawer,
        Header,
        Footer
   },
   data(){
      return {
        Books: [],
        search:"",
            
            book:null,
            active:{
                product_drawer:false
            }
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
      viewProduct(product){
            this.product = product
            this.active.product_drawer = true
            console.log(product)
        },
        closeProductDrawer(){
            this.active.product_drawer = false
        }
      
    },
};

</script>

<style lang="scss">
.product-cards-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 100px;
}
</style>
