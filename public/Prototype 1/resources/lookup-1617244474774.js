(function(window, undefined) {
  var dictionary = {
    "6a64a35a-aaf3-4da8-8539-d645bb7eb8f7": "PoemPage_2",
    "b1d3d145-67da-4b33-915b-f6dad1c4dbda": "Author Page",
    "698d213e-7c12-4917-9246-708124aa9669": "Poem Page",
    "ff0ac57f-0b60-4282-89bf-9c3181235635": "infintePoetry",
    "ecf0709f-5764-4af1-8bf8-d5d1eb032bdb": "PoemPage_4",
    "937f122a-a721-4081-9562-adbfdd3b925b": "PoemPage_3",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home Page",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);