const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const { api } = require('./routers');
const fs = require('fs')
const path = require('path')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('C:\Users\bagas\OneDrive\Documents\TAbagas\project_ta\public'));
 
app.get('/images/:name', (req, res) => {
    if (fs.existsSync(path.join(__dirname, `./uploads/${req.params.name}` ))) {
        res.sendFile(path.join(__dirname, `./uploads/${req.params.name}` ));
    } else {
        res.type('image/png').sendFile('./public/error_pdf.jpg', { root: __dirname });
    }
});

app.use('/api/v1/', api)
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
})
app.use((req, res) => {
    res.status(500).send('<h1>500 Internal Server Error</h1>');
})

app.listen(port, () => {
    console.log('Server is running on port ' + port);
}); 
