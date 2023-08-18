const http= require ('http');

const fs= require('fs');
const { buffer } = require('stream/consumers');

const server =http.createServer((req,res) =>{

    //console.log(req.url ,req.method ,req.headers);

    const url =req.url;
    const method =req.method;

    const body =[];

    if(url==='/'){
        res.write('<html>');
        res.write('<head><title> Enter Message </title></head>');
        res.write('<body>')
        res.write('<h2> Message</h2>')

        const messages = fs.readFileSync('message.txt', 'utf-8').split('\n').filter(message => message.trim() !== '');
        for (const message of messages) {
            res.write(`<p>${message}</p>`);
        }
        res.write('<form action="/message" method="POST"> <input type="text" name="message"><button type="submit" >SEND</button></form>');
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }

    if(url==="/message" && method ==="POST"){

        req.on('data',(chunk) =>{

            //console.log(chunk);
            body.push(chunk);
        });
        req.on('end',() =>{
            const parsedbody=Buffer.concat(body).toString();

            //console.log(parsedbody);

            const message=parsedbody.split("=")[1];
            fs.writeFileSync('message.txt', message);
        });

        res.statusCode=302;
        res.setHeader('Location','/')
        return res.end();
    }

    res.setHeader('content-type','html');
    res.write('<html>');
    res.write('<head><title> My first page </title></head>');

    res.write('<body><h2> my first node.js program</h2></body>');

    res.write('</html>')
    res.end();


});

server.listen(3000);