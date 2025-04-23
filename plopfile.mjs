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
        data: { curlyBefore: '{' },
        path: 'src/app/{{kebabCase name}}/layout.tsx',
        templateFile: '.plop/templates/SiteLayout.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/app/{{kebabCase name}}/page.tsx',
        templateFile: '.plop/templates/HomePage.tsx.hbs',
      },
      {
        type: 'append',
        path: 'src/app/page.tsx',
        pattern: '{/* Append route import here */}',
        template: `            <NextLink href="/{{kebabCase name}}" legacyBehavior passHref>
              <LinkList.Link>{{titleCase name}}</LinkList.Link>
            </NextLink>`,
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
      },
    ],
    actions: [
      {
        type: 'add',
        data: { curlyBefore: '{' },
        path: 'src/app/{{kebabCase siteName}}/{{kebabCase name}}/page.tsx',
        templateFile: '.plop/templates/Page.tsx.hbs',
      },
      {
        type: 'append',
        path: 'src/app/{{kebabCase siteName}}/layout.tsx',
        pattern: '{/* Append footer link here */}',
        template: `                <NextLink legacyBehavior href="/{{kebabCase siteName}}/{{kebabCase name}}" passHref>
                  <Footer.MenuLink>{{sentenceCase name}}</Footer.MenuLink>
                </NextLink>`,
      },
    ],
  })
}
