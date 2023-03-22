# GrapeJS Offline

> **Warning**
> Please note that GrapeJS Offline is very experimental for now, and not ready for production use. However, we welcome all contributions to the project. This project started as a fun experiment one afternoon after I was introduced to GrapeJS.

GrapeJS Offline is an experimental project that packages the [GrapeJS](https://grapesjs.com/) library in an offline desktop application powered by the [Tauri](https://tauri.app/) Rust framework. GrapeJS is a powerful web builder tool that allows you to create websites using a drag-and-drop interface.

## Ideas

Some things I want to add next:

- **Storage Manager**: For now there is nothing done on the rust side, but the next thing I want to do is adding a custom [Storage Manager](https://grapesjs.com/docs/modules/Storage.html#configuration), I started experimenting with the SQL Tauri plugin.

- **Better Blocks / Refactor**: I pretty much discovered GrapeJS while coding this, most of the blocks are either taken from Grape's repository or adapted from the doc samples, it's very messy for now and even hacky in some places. Cleaning it shouldn't take long though.

---

## Binaries
- App bundles are available in [releases](), they are the artifacts of the [Tauri Action](https://github.com/tauri-apps/tauri-action/)

## Installation from source
To install GrapeJS Offline, follow these steps:

```bash
git clone https://github.com/melmass/grapejs-offline.git
# Install the dependencies
cd grapejs-offline
pnpm install
# Run the dev server and tauri dev app
pnpm tauri dev
# Or build the application
pnpm run build
```

That's it! You should now be able to use GrapeJS Offline on your desktop. If you encounter any issues during installation or use, please report them to our issue tracker.

## Contributing
We welcome all contributions to Grape