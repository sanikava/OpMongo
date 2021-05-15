**OpMongo made for all device user its like quick.db but with mongodb because quick.db will not work for all**

![SanikavaDB](https://nodei.co/npm/OpMongo.png)

# Documentation
**[OpMongo](https://OpMongo.js.org)**


**How to use?**
```js
const { OP } = require("sanikava-db.mongo");
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
- **[Documentation](https://OpMongo.js.org)**
- **[GitHub](https://github.com/sanikava/OpMongo)**
