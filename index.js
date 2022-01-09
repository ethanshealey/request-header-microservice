const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors({ optionSuccessStatus: 200 }))

app.get('*', (req, res) => {
  return res.json({
    'ipaddress': req.headers['x-forwarded-for'],
    'language': req.headers['accept-language'],
    'software': req.get('user-agent')
  })
})

app.listen(process.env.PORT || 3001, () => {
  console.log(`listening on port ${process.env.PORT || 3001}`)
})
