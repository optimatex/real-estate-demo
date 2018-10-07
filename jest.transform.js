module.exports = require("babel-jest").createTransformer({
  presets: [
    [
      "env",
      {
        "targets": {
          "browsers": [
            "last 2 versions",
            "ie > 9"
          ]
        }
      }
    ],
    "stage-1",
    "react"
  ],
  plugins: ["transform-decorators-legacy"]
});
