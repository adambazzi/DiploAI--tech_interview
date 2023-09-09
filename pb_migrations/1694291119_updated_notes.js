/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d71zrcudcok1rvk")

  // remove
  collection.schema.removeField("ixd9fp2w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gr6astzz",
    "name": "content",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d71zrcudcok1rvk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ixd9fp2w",
    "name": "completed",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("gr6astzz")

  return dao.saveCollection(collection)
})
