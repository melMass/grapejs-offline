import type grapesjs from 'grapesjs';
import parser from './parser';

const plugin = (editor: grapesjs.Editor) => {
  editor.setCustomParserCss(parser);
};

export default plugin;
