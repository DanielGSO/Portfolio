{
  "name": "Skill",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Skill name"
    },
    "category": {
      "type": "string",
      "enum": [
        "frontend",
        "backend",
        "database",
        "tools",
        "languages"
      ],
      "description": "Skill category"
    },
    "proficiency": {
      "type": "number",
      "minimum": 0,
      "maximum": 100,
      "description": "Proficiency percentage"
    },
    "icon": {
      "type": "string",
      "description": "Icon name or URL"
    },
    "color": {
      "type": "string",
      "description": "Hex color code"
    }
  },
  "required": [
    "name",
    "category",
    "proficiency"
  ]
}