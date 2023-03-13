<template>
    <div class="top-picks">
      <h2>Top Picks Categories</h2>
      <div class="category-container">
        <div class="category" v-for="(category, index) in categories" :key="index">
          {{ category }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: ["Action", "Thriller", "Fantasy", "Romance", "True Crime", "Classics"]
      };
    }
  };
  </script>
  
  <style scoped>
  .top-picks {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  h2 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #37514D;
  }
  
  .category-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0;
  }
  
  .category {
    width: calc(33.33% - 10px); /* set width to one third of available space with 10px gap */
    height: 50px;
    background-color: #f5f5f5;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .category:hover{
    background-color: #90aeb2;
  }
  </style>

  