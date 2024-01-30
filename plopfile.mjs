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
        data: { curlyBefore: '{' },
        path: 'src/sites/{{kebabCase name}}/components/shared/SiteFooter.tsx',
        templateFile: '.plop/templates/SiteFooter.tsx.hbs',
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
    label: '{{sentenceCase name}}',
    href: {{camelCase name}}SiteUrl,
  },`,
      },
    ],
  })
}
