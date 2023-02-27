<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" v-bind:src=" product.img ">  
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <h5 class="card-author">{{product.author}}</h5>
            <h5 class="card-price">{{ product.price}}</h5>
            <button class="view-product-button" @click="$emit('view-product',product)">View Product</button>
        </div>    
    </div>
</template>

<script>
    export default{
        props:['product'],
        computed:{
            description(){
                return this.product.description.substring(0, 150)
            }
        }
    }
</script>

<style lang="scss">
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