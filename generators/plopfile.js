module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Select component type',
        default: 'atom',
        choices: () => [
          { name: 'Atom', value: 'atom' },
          { name: 'Molecule', value: 'molecule' },
          { name: 'Organism', value: 'organism' },
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase type}}/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs',
      },
    ],
  })
}
