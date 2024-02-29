const menu = [
  {
    name: "Home",
    path: "/",
    hasSubItem: false
  },
  {
    name: "Whale Species",
    hasSubItem: true,
    children: [
      {
        name: "Blue Whale",
        path: "/bluewhale.html"
      },
      {
        name: "Fin Whale",
        path: "/finwhale.html"
      },
      {
        name: "Killer Whale",
        path: "/killerwhale.html"
      }
    ]
  },
  {
    name: "Whale Photo",
    path: "/whalephoto.html",
    hasSubItem: false
  },
  {
    name: "About",
    path: "/about.html",
    hasSubItem: false
  }
];

export default menu;