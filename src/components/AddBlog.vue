<template>
  <div id="addblog">
    <h3>添加博客</h3>
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
      <button v-on:click.prevent="post">添加博客</button>
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
  import axios from '../axios-auth'
  export default {
    name: 'AddBlog',
    data() {
      return {
        blog: {
          title: '',
          content: "",
          categories: [],
          author: ""
        },
        authors: ["扎克伯格", "马斯克", "井深大"],
        sunmmited: false
      }
    },
    methods: {
      post() {
        // this.$http.post("https://wd4373313083ysocsc.wilddogio.com/posts.json", this.blog)
        // var _this=this
        axios.post("/posts.json", this.blog).then( (data)  =>{
          console.log(JSON.stringify(data))
          this.sunmmited = true
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #addblog * {
    box-sizing: border-box;
  }

  #addblog {
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
