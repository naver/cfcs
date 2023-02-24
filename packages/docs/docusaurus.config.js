// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/oceanicNext");
const darkCodeTheme = require("prism-react-renderer/themes/oceanicNext");
const remarkBreaks = require("remark-breaks");
const glslify = require("./plugin/glslify");
// const preloadFont = require("./plugin/preload-font");
const corePkg = require("../core/package.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Cross Framework Components",
  tagline: "CFCs(Cross Framework Components) are modules that convert components into framework usage.",
  url: "https://naver.github.io",
  baseUrl: "/cfcs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "naver",
  projectName: "naver.github.io",
  trailingSlash: false,
  plugins: [
    "docusaurus-plugin-sass",
    glslify,
    [
      "content-pages",
      /** @type {import('@docusaurus/plugin-content-pages').Options} */
      {
        id: "showcase",
        path: "showcase/pages",
        routeBasePath: "/showcase",
        remarkPlugins: [remarkBreaks],
        mdxPageComponent: require.resolve("./showcase/layout/index.tsx")
      },
    ],
  ],
  clientModules: [
    require.resolve("./polyfill.js")
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/naver/cfcs/edit/main/demo/",
          remarkPlugins: [remarkBreaks],
          lastVersion: "current",
          versions: {
            current: {
              label: `v${corePkg.version}`
            }
          },
          breadcrumbs: false
        },
        pages: {
          remarkPlugins: [remarkBreaks]
        },
        theme: {
          customCss: [
            require.resolve("typedoc-to-mdx/sass/theme.sass"),
            require.resolve("./src/styles/custom.css"),
            require.resolve("./src/styles/global.css"),
          ]
        },
        googleAnalytics: {
          trackingID: "UA-70842526-23",
          anonymizeIP: true
        }
      })
    ]
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"]
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true
        }
      },
      navbar: {
        title: "Cross Framework Components",
        items: [
          {
            type: "doc",
            docId: "tutorials/what-is-cfcs",
            label: "Tutorials",
            position: "left"
          },
          {
            to: "/docs/examples",
            label: "Examples",
            position: "left"
          },
          {
            to: "/showcase",
            label: "Showcase",
            position: "left"
          },
          {
            type: "doc",
            docId: "api/Core/Reactive/Function/reactive",
            label: "API",
            position: "left"
          },
          {
            type: "search",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
          },
          {
            href: "https://www.npmjs.com/package/@cfcs/core",
            className: "header-npm-link",
            "aria-label": "NPM Package",
            position: "right"
          },
          {
            href: "https://github.com/naver/cfcs",
            className: "header-github-link",
            "aria-label": "GitHub Repository",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorials",
                to: "docs/"
              },
              {
                label: "API",
                to: "docs/api/Core/Reactive/Function/reactive"
              }
            ]
          },
          {
            title: "Examples",
            items: [
              {
                label: "Examples",
                to: "/docs/examples",
              },
              {
                label: "Showcase",
                to: "showcase"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/naver/cfcs"
              },
              {
                label: "Issues",
                href: "https://github.com/naver/cfcs/issues"
              },
              {
                label: "Naver Open Source",
                href: "https://naver.github.io/"
              }
            ]
          }
        ],
        logo: {
          alt: "egjs",
          src: "img/egjs_white.svg",
          href: "https://naver.github.io/egjs/"
        },
        copyright: `Copyright © ${new Date().getFullYear()} NAVER, Inc. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
    })
};

module.exports = config;
