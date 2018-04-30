<template>
  <div class="movies">
    <h1>Movie List</h1>
    <div v-for="movie in movies" class="movie">
      <img v-bind:src="movie.poster" class="poster">
      <div>
        <strong>{{ movie.name }}</strong>, <i>{{ movie.director }}</i> [{{ movie.year }}]
        <router-link :to="{ name: 'show', params: { id: movie.id }}">더 보기</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    fetch('/api/movies').then(
      response => response.json()
    ).then(
      data => {
        this.movies = data
      }
    ).catch(
      err => console.log('err occurs ', err)
    )
  },
  data () {
    return {
      movies: []
    }
  }
}
</script>
