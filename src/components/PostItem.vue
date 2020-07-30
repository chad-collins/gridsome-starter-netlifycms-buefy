<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="`../../${post.node.author.image}`" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h2 class="title is-3">
          <g-link :to="post.node.path">
            {{ post.node.title }}
          </g-link>
        </h2>
        <p class="subtitle is-6">
          <g-link :to="post.node.author.path">{{ post.node.author.title }} </g-link>
        </p>
        <p>{{ post.node.excerpt }}</p>
      </div>
      <div>
        <span v-for="(tag, index) in post.node.tags" :key="tag.id">
          <div class="tag">
            <g-link :to="tag.path">
              {{ tag.id }}
            </g-link>
          </div>

          <!-- We will add a comma separator for the tags -->
          <span v-if="index + 1 < post.node.tags.length">
            ,
          </span>
        </span>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-reply"></i></span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</template>

<script>
export default {
  props: { post: {} },
};
</script>
