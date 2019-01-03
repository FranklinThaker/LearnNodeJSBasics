const http = require('http');

let data1 = '';
let data2 = '';
let data3 = '';

http.get(process.argv[2], (res) => {
    res.on('data', (data) => {
        data1 += data;
    })
    res.on('end', () => {
        http.get(process.argv[3], (res) => {
            res.on('data', (data) => {
                data2 += data;
            })
            res.on('end', () => {
                http.get(process.argv[4], (res) => {
                    res.on('data', (data) => {
                        data3 += data;
                    })
                    res.on('end', () => {
                        console.log(data1); console.log(data2); console.log(data3);
                    })
                })
            })
        })
    })
})
