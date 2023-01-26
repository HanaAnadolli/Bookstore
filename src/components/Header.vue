<template>
    <header class="head">
        <h1 class="head__title">{{title}}</h1>
        <ul class="nav_list">
            <li 
                v-for="item in menuItems"
                v-bind:key="item.path"
            ><router-link  v-bind:to="item.path">{{ item.name }}</router-link></li>
        </ul>
    </header>
</template>

<script>
    export default {
        data(){
            return{
                title: 'BOOKSTORE',
                menuItems:[
                    {path:'/' , name: 'Home'},
                    {path:'/shop' , name: 'Shop'},
                    {path:'/contact' , name: 'Contact us'},
                    {path:'login' , name: 'Login'}
                ],
            }
        }
    }
</script>

<style scoped> /*perdoret scoped kur don veq per qat faqe style me lon*/ 
    .head{
        background-color: #d5d5d5;
        padding: 2rem;
        margin: -0.5rem;
        display: flex;
        align-items: flex-end;
        gap: 3rem;
    }
    .head__title{
        font-size: 2.5rem;
        color: #6d7993;
        font-family: Calligraphic sans-serif;
        margin: 0.5rem;
    }
    .nav_list{
        list-style-type: none;
        display: flex;
        gap: 1rem;
        color:#6d7993;
    }

    .nav_list li {
        transition: all .2s ease-out;
    }

    .nav_list li:hover{
        color: white;
    }

    a:link,
    a:visited{
        text-decoration: none;
        color: rgb(63, 63, 63);
        font-weight: 600;
    }
</style>