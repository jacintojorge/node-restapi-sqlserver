//https://www.youtube.com/watch?v=ReK0kscoF8o&t=402s

import app from './app'

app.listen(app.get('port'))

console.log('server on port', app.get('port'))