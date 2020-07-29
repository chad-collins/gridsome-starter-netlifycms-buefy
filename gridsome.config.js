// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [

    // Load Blog Posts
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/blogposts/**/*.md',
        typeName: 'BlogPost',
        remark: {
          plugins: ['@gridsome/remark-prismjs', { transformInlineCode: true }],
        },
      },
    },

    // Load Event Posts
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/eventposts/**/*.md',
        typeName: 'EventPost',
        remark: {
        
        },
      },
    },
    
    // Netlify CMS

    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },

  ],

  // Templates with Paths
  templates: {
    EventPost: '/event/:year/:month/:day/:title',
    BlogPost: '/blog/:year/:month/:day/:title',
  },

  // Transformers
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
