<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds">
            <article
              v-for="post in $page.author.belongsTo.edges"
              :key="post.node.id"
              class="content post"
            >
              <h2 class="title is-2">
                {{ post.node.title }}
              </h2>
              <p class="subtitle">{{ post.node.date }}</p>
              <p>{{ post.node.excerpt }}</p>
            </article>
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

<style lang="scss" scoped>
@import '@/assets/scss/overrides.scss';

.post {
  padding-bottom: 1rem;
  border-bottom: 12px solid $primary;
}
</style>
