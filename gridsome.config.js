// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    // Load all Blog Posts from file system
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          author: {
            typeName: 'Author',
          },
        },
      },
    },

    // Load Authors from file system
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/authors/**/*.md',
        typeName: 'Author',
        refs: {
          posts: {
            typeName: 'Post',
          },
        },
      },
    },
    // Netlify CMS Plugin

    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
  ],

  templates: {
    Post: [
      {
        path: '/blog/:year/:month/:day/:title',
        componenent: '~/templates/Post.vue',
      },
    ],
    Tag: [
      {
        path: '/tag/:title',
        componenent: '~/templates/Tag.vue',
      },
    ],
    Author: [
      {
        path: '/author/:title',
        componenent: '~/templates/Author.vue',
      },
    ],
  },

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ],
    },
  },
};
