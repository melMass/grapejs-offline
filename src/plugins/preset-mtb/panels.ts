import type grapesjs from 'grapesjs';
import { log, PluginOptions } from '.';
import { cmdClear, cmdDeviceDesktop, cmdDeviceMobile, cmdDeviceTablet, /*cmdImport*/ cmdPreview } from './consts';

export default (editor: grapesjs.Editor, opts: Required<PluginOptions>) => {
  const { Panels } = editor;
  const { cmdOpenImport, cmdTglImages } = opts;
  // const openExport = 'export-template';
  const openStyleManager = 'open-sm';
  const openTraits = 'open-tm';
  const openLayers = 'open-layers';
  const openBlocks = 'open-blocks';
  const activateOutline = 'sw-visibility';
  // const activateFullscreen = 'fullscreen';
  const activatePreview = 'preview';
  const iconStyle = 'style="display: block; max-width: 22px"';

  // Turn off default devices select and create new one
  editor.getConfig().showDevices = false;

  log("Registering custom panels replacing the default ones completely")

  let panels: ({} | grapesjs.Panel)[] = [
    {
      id: 'commands',
      buttons: [
        // {
        //   id: cmdImport,
        //   command: cmdImport,
        //   label: "import"
        // },
        {
          id: cmdPreview,
          context: activatePreview,
          command: cmdPreview,
          label: `<svg ${iconStyle} viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178c.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/></g>
        </svg>`
        },
        {
          id: activateOutline,
          command: activateOutline,
          context: activateOutline,
          label: `<svg ${iconStyle} viewBox="0 0 21 21">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 4v14m8-14v14M3.5 7h14m-14 8h14"/>
    </svg>`,
        },
        {
          id: activateOutline,
          command: activateOutline,
          context: activateOutline,
          label: `<svg ${iconStyle} viewBox="0 0 21 21">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 4v14m8-14v14M3.5 7h14m-14 8h14"/>
    </svg>`,
        },
      ],
    },
    {
      id: 'devices-c',
      buttons: [{
        id: cmdDeviceDesktop,
        command: cmdDeviceDesktop,
        active: true,
        label: `<span title="Desktop"><svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />
        </svg></span>`
      }, {
        id: cmdDeviceTablet,
        command: cmdDeviceTablet,
        label: `<span title="Tablet"><svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z" />
        </svg></span>`
      }, {
        id: cmdDeviceMobile,
        command: cmdDeviceMobile,
        label: `<span title="Mobile Portrait"><svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
        </svg></span>`
      }]
    },

    {
      id: 'options',
      buttons: [


        // {
        //   id: activateFullscreen,
        //   command: activateFullscreen,
        //   context: activateFullscreen,
        //   label: `<svg ${iconStyle} viewBox="0 0 24 24">
        //       <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />
        //   </svg>`
        // }
        {
          id: "core:open-code",
          command: "core:open-code",
          label: `<span title="Export Template"><svg ${iconStyle} viewBox="0 0 48 48">
        <mask id="ipTSourceCode0"><g fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v14.882"/><path fill="#555" stroke="#fff" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4v-9Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m34 33l-4 4l4 4m6-8l4 4l-4 4"/><circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 10 14)"/><circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 16 14)"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSourceCode0)"/>
        </svg></span>`
        },
        {
          id: cmdOpenImport,
          command: cmdOpenImport,
          label: `<span title="Import Template"><svg ${iconStyle} viewBox="0 0 24 24">
        <path fill="currentColor" d="m12 8l-5 5l1.4 1.4l2.6-2.575V22h2V11.825l2.6 2.575L17 13Zm-8.35 9.5q-.8-1.225-1.225-2.625Q2 13.475 2 12q0-2.075.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12q0 1.475-.425 2.875T20.35 17.5l-1.45-1.45q.55-.925.825-1.95Q20 13.075 20 12q0-3.35-2.325-5.675Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12q0 1.075.275 2.1q.275 1.025.825 1.95Z"/>
        </svg></span>`,
        },
        {
          id: cmdTglImages,
          command: cmdTglImages,
          label: `<span title="Toggle Images"><svg ${iconStyle} viewBox="0 0 24 24">
        <path fill="currentColor" d="m21.9 21.9l-6.1-6.1l-2.69-2.69L5 5L3.59 3.59L2.1 2.1L.69 3.51L3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31l1.42-1.41zM5 19V7.83l6.84 6.84l-.84 1.05L9 13l-3 4h8.17l2 2H5zM7.83 5l-2-2H19c1.1 0 2 .9 2 2v13.17l-2-2V5H7.83z"/>
        </svg></span>`,
        },
        {
          id: 'undo',
          command: 'core:undo',
          label: `<span title="Undo"><svg ${iconStyle} viewBox="0 0 20 20">
        <path fill="currentColor" d="m14 5l-5 5l5 5l-1 2l-7-7l7-7z"/>
        </svg></span>`

          // label: `<span title="Undo"><svg ${iconStyle} viewBox="0 0 24 24">
          //     <path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" />
          // </svg></span>`
        },
        {
          id: 'redo',
          command: 'core:redo',
          label: `<span title="Redo"><svg ${iconStyle} viewBox="0 0 20 20">
      
        <path fill="currentColor" d="m6 15l5-5l-5-5l1-2l7 7l-7 7z"/>
        </svg></span>`,
        },
        {
          id: cmdClear,
          command: cmdClear,

          label: `<span title="Clear Canvas"><svg ${iconStyle} viewBox="0 0 512 512">
        <path d="M400 113.3h-80v-20c0-16.2-13.1-29.3-29.3-29.3h-69.5C205.1 64 192 77.1 192 93.3v20h-80V128h21.1l23.6 290.7c0 16.2 13.1 29.3 29.3 29.3h141c16.2 0 29.3-13.1 29.3-29.3L379.6 128H400v-14.7zm-193.4-20c0-8.1 6.6-14.7 14.6-14.7h69.5c8.1 0 14.6 6.6 14.6 14.7v20h-98.7v-20zm135 324.6v.8c0 8.1-6.6 14.7-14.6 14.7H186c-8.1 0-14.6-6.6-14.6-14.7v-.8L147.7 128h217.2l-23.3 289.9z" fill="currentColor"/><path d="M249 160h14v241h-14z" fill="currentColor"/><path d="M320 160h-14.6l-10.7 241h14.6z" fill="currentColor"/><path d="M206.5 160H192l10.7 241h14.6z" fill="currentColor"/>
          </svg></span>`,



          // label: `<span title="Clear Canvas"><svg ${iconStyle} viewBox="0 0 24 24">
          //     <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          // </svg></span>`,
        }],
    },
    {
      id: 'views',
      buttons: [
        {
          attributes: { title: 'Open Code' },
          className: 'fa fa-code',
          command: 'open-code',
          id: 'open-code'
        },
        {
          id: openStyleManager,
          command: openStyleManager,
          active: true,
          label: `<svg ${iconStyle} viewBox="0 0 24 24">
        <path fill="currentColor" d="M18 2H7c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h11c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"/><path fill="currentColor" d="M13 15v-2c0-1.103-.897-2-2-2H4V5c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h7v2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"/>
        </svg>`,
        },
        {
          id: openTraits,
          command: openTraits,
          label: `<svg ${iconStyle} viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M19 3v4m0 14V11m-7-8v12m0 6v-2M5 3v2m0 16V9"/><circle cx="19" cy="9" r="2" transform="rotate(90 19 9)"/><circle cx="12" cy="17" r="2" transform="rotate(90 12 17)"/><circle cx="5" cy="7" r="2" transform="rotate(90 5 7)"/></g>
      </svg>`
        },
        {
          id: openLayers,
          command: openLayers,
          label: `<svg ${iconStyle} viewBox="0 0 48 48">
        <mask id="ipSLayers0"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path fill="#fff" d="M4 11.914L24 19l20-7.086L24 5L4 11.914Z"/><path stroke-linecap="round" d="m4 20l20 7l20-7M4 28l20 7l20-7M4 36l20 7l20-7"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSLayers0)"/>
      </svg>`
        },
        {
          id: openBlocks,
          command: openBlocks,
          label: `<svg ${iconStyle} viewBox="0 0 20 20">
        <path fill="currentColor" d="M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0ZM6 10a.5.5 0 0 0 .5.5h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0-.5.5Z"/>
      </svg>`
        }],
    }
  ]

  // const groups = panels.map(e => (e as { id: string }).id)
  // console.log(groups)
  // for (const model of Panels.getPanels().models) {
  //   if (groups.includes(model.attributes.id)) {
  //     const panel = panels.findIndex(e => (e as { id: string }).id === model.attributes.id)
  //     panels[panel] = {
  //       ...model,
  //       ...panels[panel]
  //     }
  //   }
  // }


  // Panels.getPanels().reset(panels);
  Panels.getPanels().reset(panels)

  log("Add event handler to show styles on component selection")
  // On component change show the Style Manager
  opts.showStylesOnChange && editor.on('component:selected', () => {
    const openLayersBtn = Panels.getButton('views', openLayers);

    // Don't switch when the Layer Manager is on or there is no selected components
    if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
      const openSmBtn = Panels.getButton('views', openStyleManager);
      openSmBtn?.set('active', true);
    }
  });

  log("Select the blocks view by default")
  // Do stuff on load
  editor.onReady(() => {
    if (opts.showBlocksOnLoad) {
      const openBlocksBtn = Panels.getButton('views', openBlocks);
      openBlocksBtn?.set('active', true);
    }
  });
};