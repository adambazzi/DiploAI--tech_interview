/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d71zrcudcok1rvk")

  // remove
  collection.schema.removeField("gr6astzz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fjx5wbbp",
    "name": "completed",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d71zrcudcok1rvk")

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

  // remove
  collection.schema.removeField("fjx5wbbp")

  return dao.saveCollection(collection)
})
