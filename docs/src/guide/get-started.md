# Getting Started

Devlos UI is a collection of components based on [Tailwind CSS](https://tailwindcss.com). However, we compile everything with a dui prefix so that it can be CSS framework-agnostic.

## Install devlos-ui

```bash
npm i devlos-ui@latest
```

## That's it

You can now start adding components to your project.

## IDE Setup

Configure your IDE to recognize custom class props and provide Tailwind CSS autocomplete.

## VS Code

### Workspace Settings

Create or edit `.vscode/settings.json` in your project root:

```json
{
  "tailwindCSS.classAttributes": ["class", "className", "classes", ".*Class.*"]
}
```

## WebStorm / IntelliJ IDEA

### Settings UI

1. Go to **File → Settings** (Ctrl+Alt+S)
2. Navigate to **Languages & Frameworks → Style Sheets → Tailwind CSS**
3. In the **Class Names** section, add your custom attributes:
   - `class`
   - `className`
   - `classes`
   - `.*Class.*`

## Tips

- Use the regex pattern `.*Class.*` to catch any prop containing "Class"
- Restart your IDE after making configuration changes
