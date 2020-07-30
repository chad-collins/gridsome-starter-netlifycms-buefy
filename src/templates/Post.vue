<template>
  <Layout >
    <div>{{$page.post.title}} hi</div>
    <div v-html="$page.post.content"></div>
  </Layout>
</template>

<page-query>
  query blog($path: String){
    post: post(path: $path){
     id
     title
     excerpt
     featuredImage
     content
     tags {
       id
     }
     author {
       id
     }
     

    }
  }
</page-query>