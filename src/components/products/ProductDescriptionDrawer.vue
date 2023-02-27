<template>
    <div class="drawer-background" :class="{show: active}" @click="$emit('close-product-drawer')"/>

    <div class="drawer" :class="{show: active}">
        <div class="drawer-close" @click="$emit('close-product-drawer')">
        X
        </div>

        <div v-if="product" class="product-details">
            <img v-bind:src=" product.img "> 
            <h5 class="card-title">{{ product.name }}</h5>
            <h5 class="card-author">{{product.author}}</h5>
            <h5 class="card-price">{{ product.price}}</h5>
     
        <p class="description">{{ product.description }}</p>
        <h3 class="text-center">{{ product.price.toFixed(2) }}</h3>
        <div class="cart-total" v-if="product_total">
            <h3>In Cart</h3>
            <h4>{{ product_total }}</h4>
        </div>

        <div class="button-container">
            <button class="remove">Remove</button>
            <button class="add">Add</button>
        </div>
        </div>
    </div>

</template>

<script>
export default{
    props:['product','active'],
    computed:{
        product_total(){
            return 56.00
        }
    }
}
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