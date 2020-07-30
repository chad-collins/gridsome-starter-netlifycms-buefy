<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item to="/" tag="router-link">
        Home
      </b-navbar-item>
      <b-navbar-item to="/posts" tag="router-link">
        Posts
      </b-navbar-item>
      <b-navbar-item to="/about" tag="router-link">
        About
      </b-navbar-item>
    </template>

    <template slot="end">
      
    </template>
  </b-navbar>
</template>
