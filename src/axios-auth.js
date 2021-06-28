import axios from 'axios'

 const instance=axios.create({
   baseURL:'https://wd4373313083ysocsc.wilddogio.com'
})

// instance.defaults.headers.common['SMOETHING']='SMOETHING'
export default instance

