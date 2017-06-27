var Metalsmith  = require('metalsmith');
var serve = require('metalsmith-serve');
var watch = require('metalsmith-watch');
var layouts = require('metalsmith-layouts');
var sass = require('metalsmith-sass');
var markdown = require('metalsmith-markdown');
var drafts = require('metalsmith-drafts');

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
  .destination('./build')
  .clean(true) // rebuild everything

  .use(sass({
    outputDir: 'assets/css/',   // This changes the output dir to 'build/assets/css/'
    sourceMap: true
  }))

  .use(drafts())
  .use(markdown())

  .use(layouts({
    engine: 'handlebars'
  }))

  .use(serve())

  .use(
    watch({
      paths: {
        '${source}/**/*': true,
        'layouts/**/*': true,
      }
    })
  )

  .build(function(err, files) {
    if (err) { throw err; }
  });
