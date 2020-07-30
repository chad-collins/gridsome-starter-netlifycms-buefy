<template>
  <Layout>
    <article 
        v-for="edge in $page.blogs.edges" 
        :key="edge.node.id">
        <h2>
          <g-link :to="edge.node.path">
            {{edge.node.title}}
          </g-link>
        </h2>
        <small>
          <g-link :to="edge.node.author.path">
            {{edge.node.author.id}}
          </g-link>
        </small>
        <div>
            <span v-for="(tag, index) in edge.node.tags" 
                :key="tag.id">
                <g-link :to="tag.path">
                  {{tag.id}}
                </g-link>
                <span v-if="index + 1 < edge.node.tags.length">
                  ,  
                </span>
            </span>
        </div>
        <hr>
    </article>
 </Layout>
</template>

<page-query>
query BlogsByTags($id: ID) {
  blogs: allPost (filter: {tags: {contains: [$id]}}) {
    edges {
      node {
        title
        path
        author {
          id
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