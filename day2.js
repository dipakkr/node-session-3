
const express = require('express')

const app = express()
const port = 3000

// Query parametersa

app.get('/cars/:make', (req, res)=>{

    const data = req.params;

    console.log(data);


    const static = {
        'make' : "honda",
        est : 1920,
        data : {
            body : {
                wheel : {
                    value : '1234'

                },
                seat : {
                    seat_num : '456'
                }
            }
        }
    };

    const emp = {};

    if(data.make == 'honda'){
        res.json(static);
    }else{
        res.json(emp);
    }
   

});

/** ==================================== */


// Assigment - 1 

app.get('/cars/honda/:car', (req, res)=>{

    const data = req.params;

    const static = {
        'make' : "honda",
        model :  '',
        est : 1920,
        data : {
            body : {
                wheel : {
                    value : '1234'

                },
                seat : {
                    seat_num : '456'
                }
            }
        }
    };

    const emp = {};

    res.json(static);


});






// post 
app.post('/book', (req, res) => {
    res.send('Hello World!')
});
  




// delete

app.delete('/book', (req, res) => {
    res.send('Hello World!')
});
  



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})