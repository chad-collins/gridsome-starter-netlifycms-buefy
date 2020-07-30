<template>
  <Layout>
    <div class="section">
      <div class="container">
        <div class="columns">
        <div class="column"></div>
        <div class="column is-two-thirds">
          <article
            class="card"
            v-for="edge in $page.blogs.edges"
            :key="edge.node.id"
          >
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  :src="edge.node.featuredImage"
                  :alt="`${edge.node.title} image`"
                />
              </figure>
            </div>

            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <h2 class="title is-4">
                    <g-link :to="edge.node.path">
                      {{ edge.node.title }}
                    </g-link>
                  </h2>
                  <p class="subtitle is-6">
                    <g-link :to="edge.node.author.path">
                      {{ edge.node.author.title }}
                    </g-link>
                  </p>
                </div>
              </div>

              <div class="content">
                {{ edge.node.excerpt }}
              </div>

              <div>
                <span v-for="(tag, index) in edge.node.tags" :key="tag.id">
                  <div class="tag">
                    <g-link :to="tag.path">
                      {{ tag.id }}
                    </g-link>
                  </div>

                  <!-- We will add a comma separator for the tags -->
                  <span v-if="index + 1 < edge.node.tags.length">
                    ,
                  </span>
                </span>
              </div>
            </div>
          </article>
        </div>
        <div class="column"></div>
      </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    blogs: allPost {
      edges {
        node {
          id
          title
          path
          excerpt
          author {
            id
            title
            path
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
