<template>
  <Layout :pageTitle="`Posts by ${$page.author.title}`">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds">
            <ul v-for="post in $page.author.belongsTo.edges" :key="post.node.id">
              <li>
                <PostItem :post="post" />
              </li>
              <hr />
            </ul>
          </div>
          <div class="column">
            <div class="box">
              <figure class="image is-rounded is-128x128">
                <img class="is-rounded" :src="`../../${$page.author.image}`" />
              </figure>
              <div class="content">
                <h2 class="title is-5">About {{ $page.author.title }}</h2>
                <p>{{ $page.author.blurb }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
 query($id: ID!) {
    author(id: $id) {
      title
      path
      image
      blurb
      content
      belongsTo {
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Post {
              id
              title
              excerpt
              featuredImage
              path
              content
              date(format:"MMMM Do YYYY")
              
          
              author {
                id
                title
                image
                path
              }
            }
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

<style lang="scss" scoped>
@import '@/assets/scss/overrides.scss';

.post {
  padding-bottom: 1rem;
  border-bottom: 12px solid $primary;
}
</style>
