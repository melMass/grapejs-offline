import grapesjs from "grapesjs";
import loadComponents from "./components";
import loadBlocks from "./blocks";

export interface Options {
  label?: string,
  name?: string,
  category?: string
}

const swipper = (editor: grapesjs.Editor, opts: Options = {}) => {
  let options: Required<Options> = {
    label: "Swiper",
    name: "cswiper",
    category: "Custom",
    ...opts
  };

  loadBlocks(editor, options);
  loadComponents(editor, opts);
};

export default swipper