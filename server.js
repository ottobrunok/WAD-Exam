const express = require('express');

const app = express();



//task1
app.set('view engine', 'ejs');

app.use(express.static('Public'));

app.listen(3000);





app.get('/', (req, res) => {
    //task2
    console.log("a request has arrived");
    res.render('index', { welcomeMessage: 'Welcome to the Exam, Good luck' });
});


app.get('/destinations', (req, res) => {
    //task2
    console.log("a request has arrived");
    let destinations = [
        { id: 1, from: "Tartu", to: "Tallinn", time: "02:15", distance: 180, price: 12, tickets: 7 },
        { id: 2, from: "Tartu", to: "Narva", time: "03:50", distance: 178, price: 13, tickets: 3 },
        { id: 3, from: "Tartu", to: "Riga", time: "04:00", distance: 244, price: 20, tickets: 2 },
        { id: 4, from: "Tallinn", to: "Tartu", time: "07:15", distance: 180, price: 15, tickets: 12 },
        { id: 5, from: "Tartu", to: "Vilnius", time: "09:15", distance: 540, price: 20, tickets: 16 }
    ];
    res.render('destinations', { destinations });
});

app.use((req, res) => {
    res.status(404).render('404');
});