var Metalsmith  = require('metalsmith');
var serve = require('metalsmith-serve');
var layouts = require('metalsmith-layouts');
var sass = require('metalsmith-sass');
var collections = require('metalsmith-collections');
var markdown = require('metalsmith-markdown');
var drafts = require('metalsmith-drafts');
var partials = require('metalsmith-discover-partials');
var permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    site: {
      title: 'Ruth John\'s Work',
      description: 'Portfolio and about site for Ruth John, web developer, designer and digital artist',
      generator: 'Metalsmith',
      url: 'http:/ruthjohn.com'
    }
  })

  .source('./src')
  .destination('./docs')
  .clean(true) // rebuild everything

  .use(sass({
    outputDir: 'assets/css/',   // This changes the output dir to 'build/assets/css/'
    sourceMap: true
  }))

  .use(partials({
    directory: './layouts/partials/',
    pattern: /\.hbs$/
  }))

  .use(drafts())
  .use(markdown())

  .use(collections({
    workItem: {
      pattern: 'work-items/*.md',
      sortBy: 'dateTo'
    }
  }))

  .use(layouts({
    engine: 'handlebars'
  }))

  .use(permalinks({ // change URLs to permalink URLs
    relative: false // put css only in /css
  }))

  .use(serve())

  // .use(metalsmithExpress())
  // .use(
  //   watch({
  //     paths: {
  //       '${source}/**/*': true,
  //       'layouts/**/*': true,
  //     },
  //     livereload: true
  //   })
  // )

  .build(function(err, files) {
    if (err) { throw err; }
  });
