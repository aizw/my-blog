<template>
  <div id="single">
    <h1>{{blog.title}}</h1>
    <article>
      {{blog.content}}
    </article>
    <p>作者：{{blog.author}}</p>
    <p>分类</p>
    <ul>
      <li v-for="categorie in blog.categories">{{categorie}}</li>
    </ul>
    <button @click="deletesSingleBlog()">删除</button>
    <router-link v-bind:to="'/edit/'+this.id">编辑</router-link>
  </div>
</template>


<script>
  import axios from 'axios'
  export default {
    name:"single-blog",
    data(){
      return{
        id:this.$route.params.id,
        blog:{}
      }
    },
    created(){
      // this.$http.get("https://wd4373313083ysocsc.wilddogio.com/posts/"+this.id+".json")
      axios.get("/posts/"+this.id+".json")
        .then((data)=>{
        // console.log(data);
        // this.blog=data.body
        // return data.json()
          this.blog=data.data
      })/*.then((data) => {
        this.blog=data
      })*/
    },
    methods:{
      deletesSingleBlog(){
        axios.delete("/posts/"+this.id+".json").then(response=>{
          this.$router.push({path:"/"})
        })
      }
    }
  }
</script>

<style scoped>
  #single{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;background: #eee;
    border:1px solid #aaa;
  }



</style>
