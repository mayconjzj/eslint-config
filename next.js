module.exports = {
  env: {
      browser: true,
      es2021: true,
      node: true
  },
  settings: {
      react: {
          version: "detect"
      }
  },
  extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
  },
  plugins: [
      "@typescript-eslint",
      "react",
      "eslint-plugin-import-helpers"
  ],
  rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": [
          "error",
          {
              "semi": true,
              "tabWidth": 2,
              "endOfLine": "auto",
              "singleQuote": true,
              "trailingComma": "none"
          }
      ],
      "import-helpers/order-imports": [
          "warn",
          {
              "newlinesBetween": "always", // Cria uma nova linha para separar as importacoes
              "groups": [
                ["/^react/", "/^next/"],
                "/^@testing-library/react/",
                "/^contentlayer/",
                "/^fs/",
                "/^disqus-react/",
                "module",
                "/^@shared/",
                "absolute",
                "/^@/components/",
                "/^@/pages/",
                "/utils/",
                "/^@/models/",
                "/^@/store/",
                "/^@/lib/",
                "/^@/styles/",
                "/^@/templates/",
                ["parent", "sibling", "index"]
              ],
              "alphabetize": { "order": "asc", "ignoreCase": true }
            }
      ]
  }
}
