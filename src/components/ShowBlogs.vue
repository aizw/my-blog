<template>
  <div v-theme:column="'narrow'" id="showblogs">
    <h1>博客总览</h1>
    <input class="search" type="text" v-model="search" placeholder="搜索"/>
    <div v-for="blog in filterBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/'+ blog.id"><h3 v-rainbow>{{blog.title | to-uppercase}}</h3></router-link>

      <article>
        {{blog.content}}
      </article>
    </div>


  </div>
</template>

<script>
  import axios from '../axios-auth'
  export default {
    name: 'showblogs',
    data() {
      return {
        blogs: [],
        search: ""

      }
    },
    created() {
      // this.$http.get('https://wd4373313083ysocsc.wilddogio.com/posts.json')
      axios.get('/posts.json')
        .then( (data) =>{
          // return data.json()
        // this.blogs = data.body
        return data.data
      }).then( (data) =>  {
        var blogsArry=[]
        for(let key in data){
          data[key].id=key;
          blogsArry.push(data[key])
        }
        this.blogs=blogsArry
        console.log(this.blogs)

      })
    },
    computed: {
      filterBlogs: function () {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search)
        })
      }
    },
    filters: {
      "to-uppercase": function (value) {
        return value.toUpperCase()
      },
      // "snipet": function (value) {
      //   return value.slice(0,100)+"............"
      // }
    },
    directives:{
      "rainbow":{
        bind(el,binding,vnode) {
          el.style.color='#'+Math.random().toString(16).slice(3,9)
        }
      }
    }

  }
</script>

<style>
  #showblogs {
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog {
    padding: 10px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #EEEEEE;
    border-radius: 10px;
  }

  #showblogs .search {
    width: 97%;
    height: 30px;
    padding-left: 3%;
    border-radius: 5px;
    border: 1px solid #eee;
  }

  #showblogs a{
    color:#444;
    text-decoration: none;
  }
</style>
