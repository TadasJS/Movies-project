import express from 'express'


const app = express()
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).json({status:200, msg: 'SERVER HOME PAGE' })
})

app.get('*', (req, res) => {
    res.status(200).json({status:200, msg: 'SERVER NO PAGE' })
})



app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`))