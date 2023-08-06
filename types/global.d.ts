// Types for compiled templates
declare module 'my-polaris-starter/templates/*' {
  import '@glint/environment-ember-loose';
  import '@glint/environment-ember-template-imports';
  import { TemplateFactory } from 'ember-cli-htmlbars';

  const tmpl: TemplateFactory;
  export default tmpl;
}
