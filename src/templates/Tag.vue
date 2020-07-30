<template>
  <Layout :pageTitle="`Tagged as ${$route.params.title}`">
    <section class="section">
      <div class="container">
        <ul v-for="post in $page.posts.edges" :key="post.node.id">
          <li>
            <PostItem :post="post" />
          </li>
          <hr />
        </ul>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query BlogsByTags($id: ID) {
  posts: allPost (filter: {tags: {contains: [$id]}}) {
    edges {
      node {
        title
        path
        excerpt
        author {
          id
          title
          image
          path
          email
        }
        tags {
          id
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostItem from '../components/PostItem';
export default {
  components: { PostItem },
};
</script>
