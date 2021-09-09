class DB {
    constructor() {
        this.connect();
    }

    connect() {
        console.log('Succesfully connected to the database!');

        const db = { name: 'DB_Connection', doSomeStuff: () => {} };

        this._db = db;
    }

    getDB() {
        return this._db;
    }
}

module.exports = DB;