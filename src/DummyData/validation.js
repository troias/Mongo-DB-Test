db.createCollection("posts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "body", "tags", "date"],
      properties: {
        title: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        body: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        tags: {
          bsonType: "array",
          description: "must be a array and is required",
          items: {
            bsonType: "string",
            description: "must be a string",
          },
        },
        date: {
          bsonType: "date",
          description: "must be a date and is required",
        },
      },
    },
  },
});
