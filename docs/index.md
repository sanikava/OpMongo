# SanikavaDB
SanikavaDB Mongo wrapper for new coders.

![SanikavaDB](https://nodei.co/npm/opmongo.png)

# Documentation
**[SanikavaDB](https://opmongo.js.org)**

# Features
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

# Example

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

db.set("player.name","Sanikava") //[this is setting variable in json)]
//-> It's for adding data like tables

db.add("player.points",1) //[this is adding thing to variable but remember you have to use outside of quotation marks (") or (`) ]
//-> It's for points

db.get("player.name") //[with this you can get thing from variable in json our how many points user have.]
//-> output (Sanikava)

db.push("player.items","sword") //[you can add new things to array by this you can add more data in one user without removing other data]
//-> It's for array or you can add 2 or more in one

db.subtract("player.points",1) //[subtract value or points]
//-> It will subtract points of user
```



# Links
- **[Discord Support Server](https://discord.gg/bG7875u8qA)**
- **[Documentation](https://opmongo.js.org)**
- **[GitHub](https://github.com/sanikava/opmongo)**



<center><h1>Functions list</h1></center>
- db.set()
- db.get()
- db.push()
- db.pull()
- db.fetch()
- db.all()
- db.delete()
- db.add()
- db.subtract()
- db.exists()
- db.has()
- db.fetchAll()
- db.deleteAll()
- db.startsWith()
- db.createModel()
- db.updateModel()
- .toString()
- db.currentModelName()
- db.name()
- db.math() //it's important say this math is made for all math expresions math(key, operator, value)
- 
