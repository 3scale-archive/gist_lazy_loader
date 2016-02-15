SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  globalEvaluationScope: false,
  transpiler: "plugin-babel",

  map: {
    "es6-promise": "npm:es6-promise@3.1.2",
    "fetch-jsonp": "npm:fetch-jsonp@1.0.0",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.2",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha"
  },

  packages: {
    "gist_lazy_loader": {},
    "npm:fetch-jsonp@1.0.0": {
      "map": {
        "es6-promise": "npm:es6-promise@2.3.0"
      }
    }
  }
});
