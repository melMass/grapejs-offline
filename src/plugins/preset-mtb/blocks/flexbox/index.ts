import grapesjs from 'grapesjs';
import loadBlocks from './blocks';

export interface Options {
  blocks?: any[],
  flexboxBlock?: any,
  stylePrefix?: string,
  labelRow?: string,
  labelColumn?: string

}
//('gjs-blocks-flexbox', 
const plugin = (editor: grapesjs.Editor, opts: Options = {}) => {
  // Default options
  const config: Required<Options> = {
    blocks: [],
    // Use this to extend the default flexbox block
    flexboxBlock: {},

    // Classes prefix
    stylePrefix: '',

    // Row label
    labelRow: 'Flex Row',

    // Column label
    labelColumn: 'Flex Column',

    ...opts
  };

  // Add blocks
  loadBlocks(editor, config);
};
export default plugin;