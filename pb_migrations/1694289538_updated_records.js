/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d71zrcudcok1rvk")

  collection.name = "notes"
  collection.indexes = [
    "CREATE INDEX `idx_utdDjrx` ON `notes` (`id`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d71zrcudcok1rvk")

  collection.name = "records"
  collection.indexes = [
    "CREATE INDEX `idx_utdDjrx` ON `records` (`id`)"
  ]

  return dao.saveCollection(collection)
})
