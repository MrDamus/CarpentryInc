import productsDatabase from '../database/products';
import resourceDatabase from '../database/resources';

const Databases = {
    Production: 'PRODUCTION',
    Resources: 'RESOURCES',
};

function findObjectInDbById(databaseName, ObjectId) {
    const database = databaseName === Databases.Production
        ? productsDatabase : resourceDatabase;
    return database.find((e) => ObjectId === e.id );
}

export {Databases, findObjectInDbById};
