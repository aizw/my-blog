<template>
  <div id="editblog">
    <h3>编辑博客</h3>
    <form v-if="!sunmmited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required/>
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkbox">
        <label>Vue.js</label>
        <input type="checkbox" v-model="blog.categories" value="Vue.js">
        <label>Reat.js</label>
        <input type="checkbox" v-model="blog.categories" value="Reat.js">
        <label>Node.js</label>
        <input type="checkbox" v-model="blog.categories" value="Node.js">
        <label>Angular.js</label>
        <input type="checkbox" v-model="blog.categories" value="Angular.js">
      </div>
      <label>作者:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>
      <button v-on:click.prevent="post">编辑博客</button>
    </form>

    <div v-if="sunmmited">
      <h3>您的博客发送成功</h3>
    </div>

    <div id="preview" v-if="sunmmited">
      <h3>博客总览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客总览:</p>
      <p>{{blog.content}}</p>
      <p>博客分类</p>
      <ul>
        <li v-for="categorie in blog.categories">
          {{categorie}}
        </li>
      </ul>
      <p>作者:{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name:"edit-blog",
    data(){
      return{
        // this.$route.params.id,
        id:this.$route.params.id,
        blog:{},
        authors: ["扎克伯格", "马斯克", "井深大"],
        sunmmited: false
      }
    },
    methods:{
      fetchData(){
        // console.log(this.id);
        axios.get("/posts/"+this.id+".json").then(response => {
          console.log(response);
          this.blog=response.data
        })
      },
      post:function () {
        axios.put("/posts/"+this.id+".json",this.blog).then(response => {
          // console.log(response);
          this.sunmmited=true
        })
      }

    },
    created(){
      this.fetchData()
    }
  }
</script>


<style scoped>
  #editblog * {
    box-sizing: border-box;
  }

  #editblog {
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
  }

  label {
    margin: 20px 0 0 10px;
  }

  input[type='text'], textarea, select {
    display: block;
    width: 100%;
    padding: 8px;
    margin-top: 20px;
  }

  textarea {
    height: 200px;
  }

  #checkbox balel {
    display: inline-block;
    margin-top: 0px;
  }

  #checkbox input {
    display: inline-block;
    margin-right: 10px;
  }

  button {
    dispaly: block;
    background: crimson;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 14px;
    cuesor: poniter;
    margin-top: 25px;
  }

  #preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }

  h3 {
    margin-top: 10px;
  }
</style>



