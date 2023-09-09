/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "d71zrcudcok1rvk",
    "created": "2023-09-09 19:21:08.623Z",
    "updated": "2023-09-09 19:21:08.623Z",
    "name": "records",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fdowpyqh",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ixd9fp2w",
        "name": "completed",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_utdDjrx` ON `records` (`id`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("d71zrcudcok1rvk");

  return dao.deleteCollection(collection);
})
