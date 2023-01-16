export default {
  baselineGrid: 4,
  maxLayoutWidth: 1400,
  navigationWidth: 250,
  subNavigationWidth: 250,
  headingSizes: {
    1: 44,
    2: 32,
    3: 28,
    4: 22,
    5: 18,
    6: 16,
  },
  colors: {
    background: {
      footer: 'rgb(240, 240, 240)',
      navigationItemActive: 'rgb(240, 240, 240)',
      codeBlock: 'rgb(245, 245, 245)',
      blockquote: 'rgb(222, 240, 248)',
      blockquoteInlineCode: 'rgb(222, 240, 248)',
    },
    foreground: {
      footer: 'black',
      link: 'rgb(54, 122, 180)',
      linkHover: 'rgb(35, 88, 134)',
      linkVisited: 'rgb(54, 122, 180)',
      navigationCategory: 'rgb(100, 100, 100)',
    },
    navigationDivider: 'rgb(240, 240, 240)',
    tableDivider: 'rgb(200, 200, 200)',
  },

  breakpoints: {
    small: '@media (min-width: 480px)',
    medium: '@media (min-width: 800px)',
    large: '@media (min-width: 1024px)',
    huge: '@media (min-width: 1400px)',
  },
}
