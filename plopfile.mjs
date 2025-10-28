export default function (plop) {
  plop.setGenerator('site', {
    actions: [
      {
        data: { curlyBefore: '{' },
        path: 'src/app/{{kebabCase name}}/layout.tsx',
        templateFile: '.plop/templates/SiteLayout.tsx.hbs',
        type: 'add',
      },
      {
        path: 'src/app/{{kebabCase name}}/page.tsx',
        templateFile: '.plop/templates/HomePage.tsx.hbs',
        type: 'add',
      },
      {
        path: 'src/app/page.tsx',
        pattern: '{/* Append route import here */}',
        template: `            <NextLink href="/{{kebabCase name}}" legacyBehavior passHref>
              <LinkList.Link>{{titleCase name}}</LinkList.Link>
            </NextLink>`,
        type: 'append',
      },
    ],
    description: 'scaffolding for new site',
    prompts: [
      {
        message: 'site name',
        name: 'name',
        type: 'input',
      },
    ],
  })

  plop.setGenerator('page', {
    actions: [
      {
        data: { curlyBefore: '{' },
        path: 'src/app/{{kebabCase siteName}}/{{kebabCase name}}/page.tsx',
        templateFile: '.plop/templates/Page.tsx.hbs',
        type: 'add',
      },
      {
        path: 'src/app/{{kebabCase siteName}}/layout.tsx',
        pattern: '{/* Append footer link here */}',
        template: `                <NextLink legacyBehavior href="/{{kebabCase siteName}}/{{kebabCase name}}" passHref>
                  <PageFooter.MenuLink>{{sentenceCase name}}</PageFooter.MenuLink>
                </NextLink>`,
        type: 'append',
      },
    ],
    description: 'scaffolding for new page',
    prompts: [
      {
        message: 'site name',
        name: 'siteName',
        type: 'input',
      },
      {
        message: 'page name',
        name: 'name',
        type: 'input',
      },
    ],
  })
}
