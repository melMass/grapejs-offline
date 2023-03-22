import "ress";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import block_plugin from "./plugins/base_blocks";
import forms from "./plugins/forms";
import navbar from "./plugins/navbar";


import custom_code from "./plugins/custom_code"
import tauri_glue from "./plugins/tauri_glue";
import tabs from "./plugins/tabs";
import preset_mtb from "./plugins/preset-mtb";
// import { fontsDialogPlugin } from "./plugins/fonts/fonts";
// import swiper from "./plugins/swiper"
// import charts from "./plugins/charts"

import "./app.css";
const editor = grapesjs.init({
    container: "#gjs",
    components: '<div class="txt-red">Hello world!</div>',
    style: ".txt-red{color: red; font-family:Akkurat; font-size:10em}",
    // Disable the storage manager for the moment 
    storageManager: true,
    // selectorManager: "custom"
    //panels: { defaults: [] },
});

preset_mtb(editor)

// // Add plugins
block_plugin(editor);
tabs(editor);
custom_code(editor);
forms(editor);
navbar(editor);

tauri_glue(editor);
// swiper(editor);
// charts(editor);

//preset_webpage(editor);   
// preset_newsletter(editor);

// flexbox(editor);
// style_gradient(editor);
// style_bg(editor);

// fontsDialogPlugin(editor)

editor.StyleManager.addProperty("extra", { extend: "filter" });
editor.StyleManager.addProperty("extra", {
    extend: "filter",
    property: "backdrop-filter",
});