export const menu = [
  {
    "title": "Dashboard",
    "key": "dashboard",
    "id": "side_nav_submenu",
    "icon": "file",
    "permissions": [
      "VIEW",
      "ADMIN"
    ],
    "children": [
      {
        "title": "Create Post",
        "href": "/app/post/create",
        "icon": "edit",
        "permissions": [
          "ADMIN"
        ]
      },
      {
        "title": "Your Post",
        "href": "/app/post/list?state=PUBLISHED",
        "icon": "ordered-list",
        "permissions": [
            "ADMIN"
        ]
      }
    ]
  }
  ];

  