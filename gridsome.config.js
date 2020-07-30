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
            create: true,
          },
        },
        remark: {},
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/authors/**/*.md',
        typeName: 'Author',
        refs: {
          posts: {
            typeName: 'Post',
            route: '/blog/:year/:month/:day/:title',
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

    // Sass Loader
    // {
    //   use: 'gridsome-plugin-sass-resources-loader',
    //   options: {
    //     // provide path to the file with resources
    //     resources: 'src/assets/sass/_globals.scss',
    //   }
    // },
  ],

  templates: {
    Post: '/blog/:year/:month/:day/:title',
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
