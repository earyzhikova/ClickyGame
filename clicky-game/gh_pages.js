var ghpages = require('gh-pages');

ghpages.publish('build', {
  repo: 'https://github.com/earyzhikova/ClickyGame.git',
  remote: 'origin'
}, function (err) {
  if (err) {
    console.log(err)
  }
  console.log('published to github')
})