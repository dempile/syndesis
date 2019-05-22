import { action } from '@storybook/addon-actions';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { AutoForm } from '../src';
import { StoryWrapper } from './StoryWrapper.component';

const stories = storiesOf('AutoForm', module);
stories.addDecorator(withKnobs);

stories.add('Minimal Form Definition', () => (
  <StoryWrapper>
    <AutoForm
      definition={{
        SomeSelect: {
          displayName: 'Pick Something',
          enum: [
            {
              label: 'Broken Leg',
              value: '1',
            },
            {
              label: 'Broken Arm',
              value: '2',
            },
            {
              label: 'Upset Stomach',
              value: '3',
            },
            {
              label: 'Measles',
              value: '4',
            },
          ],
          order: 1,
          type: 'string',
        },
        SomeTextField: {
          displayName: 'Some Text Field',
          order: 0,
          type: 'string',
        },
      }}
      i18nRequiredProperty={text(
        'i18nRequiredProperty',
        'This property is required'
      )}
      initialValue={{
        SomeTextField: 'Some Value',
      }}
      validate={action('validate')}
      onSave={action('onSave')}
    >
      {({ fields, handleSubmit }) => <>{fields}</>}
    </AutoForm>
  </StoryWrapper>
));

stories.add('Text', () => (
  <StoryWrapper>
    <AutoForm
      definition={{
        SomeTextField: {
          displayName: text('Display Name', 'The Label'),
          labelHint: 'This is shown for the label hint text',
          placeholder: 'This is the placeholder text',
          type: 'string',
        },
      }}
      i18nRequiredProperty={text(
        'i18nRequiredProperty',
        'This property is required'
      )}
      initialValue={{
        SomeTextField: 'Some Value',
      }}
      validate={action('validate')}
      onSave={action('onSave')}
    >
      {({ fields, handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            {fields}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </>
      )}
    </AutoForm>
  </StoryWrapper>
));

stories.add('Number', () => (
  <StoryWrapper>
    <AutoForm
      definition={{
        SomeNumberField: {
          displayName: text('Display Name', 'The Label'),
          labelHint: 'This is shown for the label hint text',
          type: 'number',
        },
      }}
      i18nRequiredProperty={text(
        'i18nRequiredProperty',
        'This property is required'
      )}
      initialValue={{
        SomeNumberField: 55,
      }}
      validate={action('validate')}
      onSave={action('onSave')}
    >
      {({ fields, handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            {fields}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </>
      )}
    </AutoForm>
  </StoryWrapper>
));

stories.add('Checkbox', () => (
  <StoryWrapper>
    <AutoForm
      definition={{
        SomeBooleanField: {
          displayName: 'Boolean Value',
          labelHint: 'This is shown for the label hint text',
          type: 'boolean',
        },
        SomeOtherBooleanField: {
          displayName: 'String containing "false"',
          labelHint: 'This is shown for the label hint text',
          type: 'boolean',
        },
        SomeThirdBooleanField: {
          displayName: 'String containing "true"',
          labelHint: 'This is shown for the label hint text',
          type: 'boolean',
        },
      }}
      i18nRequiredProperty={text(
        'i18nRequiredProperty',
        'This property is required'
      )}
      initialValue={{
        SomeBooleanField: true,
        SomeOtherBooleanField: 'false',
        SomeThirdBooleanField: 'True',
      }}
      validate={action('validate')}
      onSave={action('onSave')}
    >
      {({ fields, handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            {fields}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </>
      )}
    </AutoForm>
  </StoryWrapper>
));

stories.add('Textarea', () => (
  <StoryWrapper>
    <AutoForm
      definition={{
        SomeTextField: {
          displayName: text('Display Name', 'The Label'),
          fieldAttributes: {
            cols: 10,
            rows: 10,
          },
          labelHint: 'This is shown for the label hint text',
          placeholder: 'This is the placeholder text',
          type: 'textarea',
        },
      }}
      i18nRequiredProperty={text(
        'i18nRequiredProperty',
        'This property is required'
      )}
      initialValue={{
        SomeTextField:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin dolor purus, id pharetra augue maximus efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus elementum tortor sem, ut vulputate sapien tristique in. Curabitur venenatis mauris nunc, ut varius libero tincidunt sed. Aliquam porttitor viverra faucibus. Curabitur sodales nisi sem, id pulvinar ante luctus eget. Cras vitae ligula pretium felis varius pulvinar. Phasellus vel sem gravida diam venenatis cursus quis sed nisi. Cras a erat eget nibh consequat feugiat nec et enim. Sed finibus tristique diam, non sodales nulla elementum vel. Curabitur cursus lacus vel vestibulum scelerisque. Curabitur tellus sapien, pretium in metus non, fringilla consequat neque.',
      }}
      validate={action('validate')}
      onSave={action('onSave')}
    >
      {({ fields, handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            {fields}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </>
      )}
    </AutoForm>
  </StoryWrapper>
));

stories.add('Select', () => (
  <StoryWrapper>
    <AutoForm
      definition={{
        MultiField: {
          displayName: 'Pick things',
          enum: [
            {
              label: 'One Fish',
              value: 'one',
            },
            {
              label: 'Two Fish',
              value: 'two',
            },
            {
              label: 'Red Fish',
              value: 'three',
            },
            {
              label: 'Blue Fish',
              value: 'four',
            },
          ],
          fieldAttributes: {
            multiple: true,
          },
          order: 2,
          type: 'string',
        },
        SomeField: {
          displayName: 'Pick a thing',
          enum: [
            {
              label: 'One Fish',
              value: 'one',
            },
            {
              label: 'Two Fish',
              value: 'two',
            },
            {
              label: 'Red Fish',
              value: 'three',
            },
            {
              label: 'Blue Fish',
              value: 'four',
            },
          ],
          labelHint: 'This is shown for the label hint text',
          order: 1,
          type: 'string',
        },
      }}
      i18nRequiredProperty={text(
        'i18nRequiredProperty',
        'This property is required'
      )}
      initialValue={{
        MultiField: ['one', 'four'],
        SomeField: 'three',
      }}
      validate={action('validate')}
      onSave={action('onSave')}
    >
      {({ fields, handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            {fields}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </>
      )}
    </AutoForm>
  </StoryWrapper>
));

stories.add('Duration', () => (
  <StoryWrapper>
    <AutoForm
      definition={{
        duration1: {
          displayName: 'Duration 1',
          labelHint: 'This is shown for the label hint text',
          type: 'duration',
        },
        duration2: {
          description: 'Some description so the help text is filled in',
          displayName: 'Duration 2',
          labelHint: 'This is shown for the label hint text',
          type: 'duration',
        },
        duration3: {
          displayName: 'Duration 3',
          labelHint: 'This is shown for the label hint text',
          type: 'duration',
        },
      }}
      i18nRequiredProperty={text(
        'i18nRequiredProperty',
        'This property is required'
      )}
      initialValue={{
        duration1: number('Duration 1', 642343),
        duration2: number('Duration 2', 100),
        duration3: number('Duration 3', 60000),
      }}
      validate={action('validate')}
      onSave={action('onSave')}
    >
      {({ fields, handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            {fields}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </>
      )}
    </AutoForm>
  </StoryWrapper>
));
