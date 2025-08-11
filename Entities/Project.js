{
  "name": "Project",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Project title"
    },
    "description": {
      "type": "object",
      "properties": {
        "en": {
          "type": "string"
        },
        "es": {
          "type": "string"
        }
      },
      "description": "Project description in multiple languages"
    },
    "tech_stack": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Technologies used"
    },
    "image_url": {
      "type": "string",
      "description": "Project screenshot URL"
    },
    "live_url": {
      "type": "string",
      "description": "Live project URL"
    },
    "github_url": {
      "type": "string",
      "description": "GitHub repository URL"
    },
    "featured": {
      "type": "boolean",
      "default": false,
      "description": "Whether project is featured"
    },
    "category": {
      "type": "string",
      "enum": [
        "web",
        "mobile",
        "api",
        "ai",
        "blockchain"
      ],
      "description": "Project category"
    }
  },
  "required": [
    "title",
    "description"
  ]
}