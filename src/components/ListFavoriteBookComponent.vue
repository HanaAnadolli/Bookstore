<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Book</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="favoritebook in FavoriteBooks" :key="favoritebook._id">
            <td>{{ favoritebook.name }}</td>
            <td>{{ favoritebook.email }}</td>
            <td>{{ favoritebook.book }}</td>
            <td>{{ favoritebook.description }}</td>
            <td>
              
              <button
                @click.prevent="deleteFavoriteBook(favoritebook._id)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      FavoriteBooks: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/apiF";
    axios
      .get(apiURL)
      .then((res) => {
        this.FavoriteBooks = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteFavoriteBook(id) {
      let apiURL = `http://localhost:4000/apiF/delete-favoritebook/${id}`;
      let indexOfArrayItem = this.FavoriteBooks.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.FavoriteBooks.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>
