const express = require('express')
const app = express();
const axios = require('axios');

const PORT = process.env.PORT || 3000;
const Env = process.env.Env || 'production';


app.get('/api/:npi',(req,res)=>{
    let url = 'https://npiregistry.cms.hhs.gov/api/resultsDemo2/?number=' + req.params.npi+ '&pretty=on'

    axios.get(url)
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});


app.listen(PORT, ()=>{
    console.log({Port: PORT, Environment: Env})
})

