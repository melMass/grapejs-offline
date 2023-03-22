import type grapesjs from 'grapesjs';
import openImportCommand from './openImportCommand';
import openExportCommand from './openExportCommand';
import tglImagesCommand from './toggleImagesCommand';
import { log, PluginOptions } from '..';
import { cmdClear, cmdDeviceDesktop, cmdDeviceMobile, cmdDeviceTablet, cmdPanelSize, cmdPreview } from '../consts';
import preview from './preview';

export default (editor: grapesjs.Editor, opts: Required<PluginOptions>) => {
  const { Commands } = editor;
  const txtConfirm = opts.textCleanCanvas;

  log("Registering custom open command")
  openImportCommand(editor, opts);
  log("Registering custom export command")
  openExportCommand(editor, opts);
  log("Registering custom toggle image command")
  tglImagesCommand(editor, opts);

  log("Add device commands (wrapping the default ones)")
  Commands.add(cmdDeviceDesktop, {
    run: (ed) => ed.setDevice('Desktop'),
    stop: () => { },
  });

  Commands.add(cmdDeviceTablet, {
    run: (ed) => ed.setDevice('Tablet'),
    stop: () => { },
  });

  Commands.add(cmdDeviceMobile, {
    run: (ed) => ed.setDevice('Mobile portrait'),
    stop: () => { },
  });

  log("Add custom preview command")
  Commands.add(cmdPreview, preview)

  log("Add siderbar resize command")
  Commands.add(cmdPanelSize, {
    run: (ed) => {
      log("Changing the size of the sidebar/viewport")
      const main = 75
      const main_w = `${main}%`;
      const remain_w = `${100 - main}%`
      // Change the size of the sidebar/viewport
      const cv = ed.Canvas.getElement()
      cv.style.width = main_w;

      const inspector = document.querySelector(".gjs-pn-panel.gjs-pn-views-container.gjs-one-bg.gjs-two-color") as HTMLDivElement
      inspector.style.width = remain_w

      const top_bar_options = document.querySelector(".gjs-pn-options") as HTMLDivElement
      top_bar_options.style.right = remain_w

      const top_bar_views = document.querySelector(".gjs-pn-views") as HTMLDivElement
      top_bar_views.style.width = remain_w

      const top_bar_views_buttons = document.querySelector(".gjs-pn-panel.gjs-pn-views.gjs-one-bg.gjs-two-color") as HTMLDivElement
      (top_bar_views_buttons.children[0] as HTMLDivElement).style.justifyContent = "flex-end"

      // move the commands 
      const buttons = document.querySelector(".gjs-pn-buttons") as HTMLDivElement
      //buttons.style.backgroundColor = "purple"
      buttons.style.justifyContent = "center"
    }
  }
  )

  log("Add custom clear command")
  Commands.add(cmdClear, {
    run: async (ed) => {
      log("Clearing")
      // const cmd = 'core:canvas-clear';
      if (txtConfirm) {
        if (await confirm(txtConfirm)) {
          // ed.runCommand(cmd);
          editor.DomComponents.clear();
          // editor.CssComposer.clear();
        }
      } else {
        editor.DomComponents.clear();
        // editor.CssComposer.clear();
      }
    }
  });


};