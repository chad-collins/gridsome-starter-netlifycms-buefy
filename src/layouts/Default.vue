<template>
  <div class="layout">
    <Navbar />
    <section class="hero is-medium is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            {{ pageTitle }}
          </h1>
          <h2 v-if="pageSubtitle" class="subtitle">
            {{ pageSubtitle }}
          </h2>
        </div>
      </div>
    </section>
    <main>
      <slot />
    </main>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Created by <a href="chadcollins.net"><strong>Chad Collins</strong></a
          >. Powered by <a href="https://gridsome.org/"><strong>Gridsome</strong></a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '../components/Navbar';
export default {
  props: { pageTitle: '', pageSubtitle: '', color: '' },
  components: { Navbar },
};
</script>

<style lang="scss">
@import '@/assets/scss/overrides.scss';

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
