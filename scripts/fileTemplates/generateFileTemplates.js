const generateComponentIndexTemplate = (componentName) => {
  const template = `
  export { default } from './${componentName}';
  `;

  return template;
};

const generateComponentTemplate = (componentName) => {
  const template = `
  import * as React from 'react';
  import styles from './${componentName}.module.scss';

  interface ${componentName}Props {}
  
  const ${componentName} = ({}: ${componentName}Props) => {
    return (
      <div className={styles.wrapper}>
        ${componentName}
      </div>
    );
  }
  
  export default ${componentName};
  `;

  return template;
};

const generateComponentStyleModuleTemplate = (componentName) => {
  const template = `.wrapper {}`;

  return template;
};

const generateComponentStoriesTemplate = (componentName) => {
  const template = `
  import * as React from 'react';
  import { Meta, StoryObj } from '@storybook/react';
  import ${componentName} from './${componentName}';
  
  export default {
    component: ${componentName},
    title: 'Components/${componentName}',
  } as Meta;
  
  type Story = StoryObj<typeof ${componentName}>;
  
  export const Default: Story = {
    args: {},
    render: (args: any) => <${componentName} {...args} />,
  };
  `;

  return template;
};

const generateComponentStoriesMarkdownTemplate = (componentName) => {
  const template = `
import { ArgTypes, Meta, Stories, Title } from '@storybook/blocks';
import * as ${componentName}Stories from './${componentName}.stories';

<Meta of={${componentName}Stories} />

<Title>${componentName} Component</Title>

## API Reference

<ArgTypes of={${componentName}Stories} />

## Examples

<Stories />
`;

  return template;
};

const generateComponentUnitTestsTemplate = (componentName) => {
  const template = `
  import * as React from 'react';
  import { render, screen } from '@testing-library/react';
  import { axe, toHaveNoViolations } from "jest-axe";
  import ${componentName} from '@/components/${componentName}';

  expect.extend(toHaveNoViolations);

  describe("App Component", () => {
    it("Should Render without errors", () => {
      render(<${componentName} />);
      
      expect(screen.getByRole('${componentName}')).toBeInTheDocument();
    });
    it("Should render without Axe Core A11Y errors", async () => {
      render(<${componentName} />);

      expect(await axe(render(<${componentName} />)).toHaveNoViolations();
    });
  });
  `;

  return template;
};

module.exports = {
  generateComponentIndexTemplate,
  generateComponentTemplate,
  generateComponentStyleModuleTemplate,
  generateComponentStoriesTemplate,
  generateComponentStoriesMarkdownTemplate,
  generateComponentUnitTestsTemplate,
};
