# SanikavaDB
SanikavaDB Mongo wrapper for new coders.

![SanikavaDB](https://nodei.co/npm/opmongo.png)

# Documentation - 
**[OpMongo Documentation](https://opmongo.js.org)**

# What is OpMongo?
- OpMongo is a new Mongo wrapper maded for people who are new to coding. OpMongo is maded in a way so people can use it easily without any confusion, and even if you have any confusion you can ask about it in our Discord Support Server. 

# Features -
- Beginner friendly
- Easy to use
- Very similar to **[quick.db](https://npmjs.com/package/quick.db)**
- Similar to  **[sanikava-db.json](https://npmjs.com/package/sanikava-db.json)**
- Dot notation support
- Import & export support
- Simple
- Asynchronous
- Multiple model support
- Key value based
- Quick and Easy setup
- Open Source 

<h1> Example </h1> <p> How to Connect? </p>

```js
const { OP } = require("opmongo");
const db = new OP("mongodb://localhost/SanikavaDB");

db.on("ready", () => {
    console.log("Database connected!");
});

db.set("foo", "bar");

db.get("foo").then(console.log);
```



# Example

```js
const { OP } = require("opmongo");
const db = new OP("mongodb://localhost/SanikavaDB");

db.set("player.name","Sanikava")
// This is for setting variable in JSON.

db.add("player.points",1)
// This is for adding things to a certain variable, but remember you need to use it outside of the quotatin marks ("") or (``).

db.get("player.name")
// This will get the data you want, 
// For example player has the name "Sanikava" then it will send Sanikava as output.

db.push("player.items","sword")
// db.add("",) was used for adding a single thing, but db.push("", "") can be used for adding multiple things within a array.

db.subtract("player.points",1) 
// db.subtract("", ) is used for removing something from someone.

/**
Example of other command are listed below, you need to scroll down wards in order to get them.
**/
```



# Links -
- **[Discord Support Server](https://discord.gg/bG7875u8qA)**
- **[Documentation](https://opmongo.js.org)**
- **[GitHub](https://github.com/sanikava/opmongo)**



<center><h1>Functions list - </h1></center>
- db.set() → db.set() is for adding data like: tables. <br>
- db.get() → db.get() is used for getting a Data. <br>
- db.push() → db.push() is for array or you can add 2 or more in one. <br>
- db.pull() <br>
- db.fetch() <br>
- db.all() <br>
- db.delete() <br>
- db.add() <br>
- db.subtract() <br>
- db.exists() <br>
- db.has() <br>
- db.fetchAll() <br>
- db.deleteAll() <br>
- db.startsWith() <br>
- db.createModel() <br>
- db.updateModel() <br>
- .toString() <br>
- db.currentModelName() <br>
- db.name() <br>
- db.math() → it's important say this math is made for all math expresions math(key, operator, value). <br>
