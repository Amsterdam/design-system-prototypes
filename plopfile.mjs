export default function (plop) {
  plop.setGenerator('site', {
    description: 'scaffolding for new site',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'site name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/sites/{{kebabCase name}}/constants.ts',
        templateFile: '.plop/templates/constants.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/sites/{{kebabCase name}}/pages/{{pascalCase name}}RootPage.tsx',
        templateFile: '.plop/templates/RootPage.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/sites/{{kebabCase name}}/components/shared/SiteHeader.tsx',
        templateFile: '.plop/templates/SiteHeader.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/sites/{{kebabCase name}}/pages/HomePage.tsx',
        templateFile: '.plop/templates/HomePage.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/sites/{{kebabCase name}}/routes.tsx',
        templateFile: '.plop/templates/routes.tsx.hbs',
      },
      {
        type: 'append',
        path: 'src/main.tsx',
        pattern: '/* Append routes import here */',
        template: `import { routes as {{camelCase name}}Routes } from './sites/{{kebabCase name}}/routes'`,
      },
      {
        type: 'append',
        path: 'src/main.tsx',
        pattern: '* Append routes object here */',
        template: `  {{camelCase name}}Routes,`,
      },
      {
        type: 'append',
        path: 'src/shared/pages/RootPage.tsx',
        pattern: '/* Append siteUrl import here */',
        template: `import { siteUrl as {{camelCase name}}SiteUrl } from '../../sites/{{kebabCase name}}/constants'`,
      },
      {
        type: 'append',
        path: 'src/shared/pages/RootPage.tsx',
        pattern: '* Append site object here */',
        template: `  {
    label: '{{name}}',
    href: {{camelCase name}}SiteUrl,
  },`,
      },
    ],
  })

  plop.setGenerator('page', {
    description: 'scaffolding for new page',
    prompts: [
      {
        type: 'input',
        name: 'siteName',
        message: 'site name',
      },
      {
        type: 'input',
        name: 'name',
        message: 'page name',
      }
    ],
    actions: [
      {
        type: 'add',
        data: { curlyBefore: '{' },
        path: 'src/sites/{{kebabCase siteName}}/pages/{{pascalCase name}}Page.tsx',
        templateFile: '.plop/templates/Page.tsx.hbs',
      },
      {
        type: 'append',
        path: "src/sites/{{kebabCase siteName}}/routes.tsx",
        pattern: '/* Append route import here */',
        template: `import { {{pascalCase name}}Page } from './pages/{{pascalCase name}}Page'`,
      },
      {
        type: 'append',
        data: { dollarSign: '$' },
        path: 'src/sites/{{kebabCase siteName}}/routes.tsx',
        pattern: '/* Append route here */',
        template: `    {
      element: <{{pascalCase name}}Page />,
      path: \`{{dollarSign}}{siteUrl}{{kebabCase name}}\`,
    },`,
      },
      {
        type: 'append',
        data: { dollarSign: '$' },
        path: "src/sites/{{kebabCase siteName}}/pages/{{pascalCase siteName}}RootPage.tsx",
        pattern: '{/* Append footer link here */}',
        template: `            <PageMenuLink to={\`{{dollarSign}}{siteUrl}{{kebabCase name}}\`}>{{name}}</PageMenuLink>`,
      },
    ],
  })
}
