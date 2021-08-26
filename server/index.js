const express = require("express")
const path = require("path")
const app = express()

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"))
})

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Shai Halud Seen on ${port}`)
})

// Other ways to link files for deployment
// JavaScript:

// app.get('/js', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/main.js'))
// })
// HTML:

// <script src="/js"></script>
// Use middleware to serve the files on each request.

// JavaScript:

// app.use('/js', express.static(path.join(__dirname, 'public/main.js')))
// HTML:

// <script src="/js"></script>
