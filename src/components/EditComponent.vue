<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Update Book</h3>
      <form @submit.prevent="handleUpdateForm">
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
          <button class="btn btn-danger btn-block">Update</button>
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
    book: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/edit-book/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.book = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-book/${this.$route.params.id}`;

      axios
        .put(apiURL, this.book)
        .then((res) => {
          console.log(res);
          this.$router.push("/view");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
