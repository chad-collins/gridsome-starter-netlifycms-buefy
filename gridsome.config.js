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
            route: '/tag/:title',
            create: true
          },
          author:{
            typeName: 'Author',
            route: '/author/:title',
            create: true
          }
        },
        remark: {
          plugins: ['@gridsome/remark-prismjs', { transformInlineCode: true }],
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
    Post: '/blog/:year/:month/:day/:title',
    Tag: '/tag/:title',
    Author: '/author/:title',
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
}
