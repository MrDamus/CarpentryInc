export default function(database, idsArray) {
    return database.filter((e) => idsArray.indexOf(e.id) !== -1);
}
