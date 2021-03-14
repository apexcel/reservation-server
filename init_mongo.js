db = new Mongo().getDB('reservation');
db.createCollection('users');
db.users.insertMany([
    {id: 'id1', name: 'kim'},
    {id: 'id2', name: 'jae'},
]);
