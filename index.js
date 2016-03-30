var vorpal = require('vorpal')()

vorpal
  .command('generate', 'Outputs an express API file.')
  .action(function(args, callback) {
    this.log('Your file will be in api/resources/<name>')
    callback()
  })

vorpal
  .command('init', 'Creates the boilerplate express API.')
  .action(function(args, callback) {
    this.log('generating...')
    callback()
  })

vorpal
  .command('watch', '(disabled) Monitors "app/models" for changes and updates API files accordingly')
  .action(function(args, callback) {
    this.log('generating...')
    callback()
  })

vorpal
  .delimiter('hyper~$')
  .show()
