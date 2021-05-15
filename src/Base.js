/*Unschooled Gamer are you looking this? 🤣*/
/*Hello Dev if you here then you may known about this if you can help in update come to my discord server */

/************************************

https://discord.link/sanikava 


*************************************/
const EventEmitter = require("events").EventEmitter;
const mongoose = require("mongoose");
const Error = require("./Error");

class Base extends EventEmitter {
    constructor(mongodbURL, connectionOptions = {}) {
        super();
        if (!mongodbURL || !mongodbURL.startsWith("mongodb")) throw new Error("No mongodb url was provided!");
        if (typeof mongodbURL !== "string") throw new Error(`Expected a string for mongodbURL, received ${typeof mongodbURL}`);
        if (connectionOptions && typeof connectionOptions !== "object") throw new Error(`Expected Object for connectionOptions, received ${typeof connectionOptions}`);


        Object.defineProperty(this, "dbURL", {
            value: mongodbURL
        });


        this.options = connectionOptions;


        this.connection = this._create();

        this.connection.on("error", (e) => {
            this.emit("error", e);
        });
        this.connection.on("open", () => {
            this.readyAt = new Date();
            this.emit("ready");
        });
    }

    _create(url) {
        this.emit("debug", "Creating database connection...");

        if (url && typeof url === "string") this.dbURL = url;
        if (!this.dbURL || typeof this.dbURL !== "string") throw new Error("Database url was not provided!", "MongoError");

        delete this.options["useUnique"];

        return mongoose.createConnection(this.dbURL, {
            ...this.options,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    }

    _destroyDatabase() {
        this.connection.close(true);
        this.readyAt = undefined;
        this.dbURL = null;
        this.emit("debug", "Database disconnected!");
    }

    get url() {
        return this.dbURL;
    }

    get state() {
        if (!this.connection || typeof this.connection.readyState !== "number") return "DISCONNECTED";
        switch (this.connection.readyState) {
            case 0:
                return "DISCONNECTED";
            case 1:
                return "CONNECTED";
            case 2:
                return "CONNECTING";
            case 3:
                return "DISCONNECTING";
        }
    }
}
module.exports = Base;