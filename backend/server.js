const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const walletGeneration = require('./walletGeneration');
const txCreate = require('./txCreate');
const libSign = require('./libSign');
const commitTx = require('./commitTx');


const dbUrl = "mongodb://sarup:sarup123@ds143614.mlab.com:43614/sarup";
const app = express();


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send({text: "Working"});
})

app.post('/register',(req,res)=>{
    if(req.body.username && req.body.password){
        bcrypt.hash(req.body.password, null, null, function(err, hash) {
            
            // Database Contact
            MongoClient.connect(dbUrl, function(err, db) {
                if (err) throw err;
                var dbo = db.db("sarup");
                // Checking for Unique Username
                dbo.collection("edu-users").find({username: req.body.username}).toArray(function(err, result) {
                    if (err) throw err;
                    try{
                    if(result.length > 0){
                        res.json({message: `Username ${req.body.username} already exsists.`});
                    }else{  
                            // Creating Wallet
                            const wallet = walletGeneration.createWallet(req.body.password);
                            // Creating Username
                            const user = {
                                username: req.body.username,
                                password: hash,
                                wallet: wallet,
                                role: req.body.role,
                                name: req.body.name
                            }
                            dbo.collection("edu-users").insertOne(user, function(err, res) {
                                if (err) throw err;
                            });
                        res.json({message: "User Created",data:{
                            wallet: wallet,
                            username: req.body.username,
                            password: req.body.password,
                            role: req.body.role,
                            name: req.body.name
                        }});
                        

                    }
                    }catch(e){
                        res.json(e);
                    }
                    db.close();
                });
            });

        });
    }
})

app.post('/login', (req,res) =>{
    if(req.body.username && req.body.password){
        MongoClient.connect(dbUrl, function(err, db) {
            if (err) throw err;
            var dbo = db.db("sarup");
            dbo.collection("edu-users").find({username: req.body.username}).toArray(function(err, result) {
                if (err) throw err;
                try{
                    if(req.body.username === result[0].username && bcrypt.compareSync(req.body.password, result[0].password)){
                        const user = {
                            username: result[0].username,
                            wallet: result[0].wallet,
                            role: result[0].role
                        }
                        jwt.sign({ user }, 'someshitkey', (err,token) => {
                            res.send({token});
                        })
                    }else{
                        res.json({message: 'Username or Password Incorrect'})
                    }
                }catch(e){
                    res.json({message: 'User not Found'})
                }
                db.close();
              });
        });
    }
})

app.get('/home', verifyToken, (req, res) => {
    jwt.verify(req.token, 'someshitkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        }else{
            res.json({username: authData.user.username, wallet: authData.user.wallet, role: authData.user.role});
            //res.send(`Welcome ${authData.user.username } <br> Wallet: ${JSON.stringify(authData.user.wallet)}`);
        }
    })
})

app.get('/getAllCollege', (req,res) => {
    MongoClient.connect(dbUrl, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sarup");
        dbo.collection("edu-users").find({role: "university"}).toArray(function(err, result) {
            let uniAddress = result.map(uni => {
                return {name: uni.name, address: uni.wallet.address}
            });
            res.send(uniAddress);
            db.close();
          });
    });
})

app.post('/tx/certfunction', verifyToken, (req,res) => {
    jwt.verify(req.token, 'someshitkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        }else{
            //res.json({username: authData.user.username, wallet: authData.user.wallet, role: authData.user.role});
            //res.send(`Welcome ${authData.user.username } <br> Wallet: ${JSON.stringify(authData.user.wallet)}`);
            let param = new createParam(`[
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "setValue",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "getValue",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }
            ]`, '0x254dffcd3277c0b1660f6d42efbb754edababc2b', `setValue(${req.body.value})`, '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1');
            txCreate.createTx(param, (tx)=>{
                res.send(tx);
            });
        }
    })
})

app.post('/commit', verifyToken, (req,res)=>{
    commitTx.commit(req.body.tx, (txID)=>{
        res.send(txID);
    });
})

function verifyToken(req,res,next) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

function createParam(abi, contractAddress, funcName, accountAddress){
    this.abi = abi;
    this.contractAddress = contractAddress;
    this.funcName = funcName;
    this.accountAddress = accountAddress;
}

function testLibSign(tx, privateKey){
    libSign.signTx(tx, privateKey, (signedTx) =>{
        console.log(signedTx)
    })
}

app.listen(5000,()=>{
    console.log(`Node Server Started at Port ${5000}`)
    // testLibSign(`{
    //     "nonce": "0x7",
    //     "gasPrice": "0x4a817c800",
    //     "gasLimit": "0x3d0900",
    //     "data": "0x55241077000000000000000000000000000000000000000000000000000000000000006f",
    //     "to": "0x254dffcd3277c0b1660f6d42efbb754edababc2b"
    // }`, '4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d');
})