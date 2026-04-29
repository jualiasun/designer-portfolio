# Designer Portfolio

This portfolio is built so you can update **texts**, **images**, and **videos** for any project without installing anything on your computer. You only need a web browser and a GitHub account.

---

## ✏️ How to edit the website (the easy way)

You will use **GitHub.dev** — a free, browser-based editor that looks like a real code editor but runs entirely on github.com. No installations, no terminal.

### Step 1 — Open the project on GitHub

1. Go to the repository page on GitHub (the page where all the project files are listed).
2. Make sure you are **logged in** to your GitHub account.

### Step 2 — Open the browser editor

While you are on the repository page, **press the `.` (dot) key** on your keyboard.

The page will reload and you will see an editor that looks like this:

- A **file tree** on the left (folders and files)
- A **big area in the middle** where you edit the file you click on
- A **Source Control** icon on the very left sidebar (it looks like three dots connected with lines) — this is where you save your changes

> Tip: If pressing `.` doesn't work, you can also just change the URL from `github.com/...` to `github.dev/...` (replace `.com` with `.dev`) and press Enter.

### Step 3 — Save your changes (this is important!)

After you change a file, GitHub.dev does **not** publish it automatically. You need to:

1. Click the **Source Control** icon on the left sidebar (you will see a small blue number next to it — that's how many files you changed).
2. You will see your changed files listed under "Changes".
3. **Stage your changes.** Hover over each file under "Changes" and click the small **`+` (plus)** icon that appears on the right. The file will move from "Changes" up to a new section called **"Staged Changes"**. Do this for every file you want to publish.
   - Tip: to stage everything at once, hover over the word **"Changes"** itself and click the **`+`** icon next to it.
   - Only files in **"Staged Changes"** will be included in your commit. Anything left under "Changes" will be ignored.
4. In the text box at the top, type a short message describing what you did, for example: `Update Exitfive project description`.
5. Click the big blue **Commit & Push** button (or just **Commit** — and confirm if it asks).

That's it — your changes are now live on GitHub. The website will automatically rebuild and update in 1–2 minutes.

#### Made a mistake? Discard a change

If you changed something by accident, or you want to throw away an edit and start over, you can discard it **before** committing:

- **Discard one file** — under "Changes", hover over the file and click the small **↶ (curved arrow / Discard Changes)** icon on the right. The file will go back to exactly how it was before you touched it.
- **Discard everything** — hover over the word **"Changes"** itself and click the same **↶** icon to roll back all uncommitted edits at once.

GitHub.dev will ask you to confirm. ⚠️ **This cannot be undone**, so only do it if you're sure you don't want those edits.

> Already committed and pushed by mistake? Just **ping a developer** — undoing a commit takes him about 10 seconds.

---

## 📝 How to edit project texts

All project content lives in the folder:

```
src/data/projects/
```

Each project is a separate file, for example:

- `exitfive.json`
- `mixmax.json`
- `zoca.json`
- `allo-fiber.json`
- …and so on

Click the file you want to edit. You will see something that looks like this:

```json
{
  "preview": {
    "order": 1,
    "image": "../../assets/projects/exitfive/preview.png",
    "category": "visual identity",
    "client": "Exitfive",
    "title": "A community for\nB2B marketers",
    "align": "left",
    "mt": "",
    "speed": -0.1
  },
  "blocks": [
    { "type": "media", "files": ["../../assets/projects/exitfive/1.jpg"] },
    {
      "type": "text",
      "title": "Project Overview",
      "text": "Exit Five is a community for B2B marketing professionals..."
    }
  ]
}
```

### The two parts of a project file

Every project file has two main sections:

- **`"preview"`** — describes the **card that represents this project on the home page** (its title, client name, category, preview image, and where it sits in the grid). Think of it as the "thumbnail" for the project.
- **`"blocks"`** — the **content of the project page itself**, in the order it appears as you scroll. It is a list of blocks stacked one after another. Each block is either a piece of text (`"type": "text"`), a piece of media like an image or video (`"type": "media"`), or a credits banner at the end (`"type": "nbd-banner"`).

### What you can safely change

You can edit any text that is **inside double quotes `"..."` after** one of these labels:

- **`"title"`** — the title shown on the project preview or above a text block
- **`"text"`** — the paragraph text below a title
- **`"category"`** — the small label like "visual identity" or "branding" (inside `"preview"`)
- **`"client"`** — the client name shown on the preview card (inside `"preview"`)
- **`"image"`** — the preview image shown on the home-page card (inside `"preview"`). To change it, follow the [How to replace project images](#-how-to-replace-project-images) section below — the easiest way is to upload a new file with the **same name** as the current one (e.g. `preview.png`) so you don't have to touch this line at all.
- **`"projectName"`** — the project name shown in the credits banner at the bottom
- **`"team"`** — the list of credits at the end of a project

### Example: changing a paragraph

**Before:**

```json
{
  "type": "text",
  "title": "Project Overview",
  "text": "Exit Five is a community for B2B marketing professionals."
}
```

**After:**

```json
{
  "type": "text",
  "title": "About the project",
  "text": "Exit Five is the largest community for B2B marketers in the world."
}
```

### Example: changing the credits

```json
{
  "type": "nbd-banner",
  "projectName": "Visual Identity for Exitfive",
  "team": [
    "Creative Direction: Alina Shupikova",
    "Web & Quality Control: Juan Pablo Lopez",
    "Motion Design: Leonel Carreras"
  ]
}
```

Just edit the text inside the quotes. To **add** a new credit line, copy one of the existing lines, add a comma `,` at the end of the previous line, and paste a new line below:

```json
"team": [
  "Creative Direction: Alina Shupikova",
  "Web & Quality Control: Juan Pablo Lopez",
  "Motion Design: Leonel Carreras",
  "Photography: Jane Doe"
]
```

### ⚠️ Rules to avoid breaking the site

JSON files are very picky. Follow these rules and everything will be fine:

1. **Never delete the double quotes `"..."`** around text. Only change what's between them.
2. **Never delete the commas `,`** between items, and never add an extra comma after the **last** item in a list.
3. **Never change the names on the left** like `"title"`, `"text"`, `"client"`. Only change the value on the right.
4. To make a **line break inside a title**, use `\n`. For example: `"A community for\nB2B marketers"` will display on two lines.
5. If your text contains a quote character `"`, write it as `\"`. Example: `"She said \"hello\" to everyone"`.

> If you make a mistake, don't worry — GitHub.dev will show a **red squiggly line** under the broken part, and the website will simply keep showing the previous version until you fix it.

---

## 🖼️ How to replace project images

Project **images** (photos, mockups, previews, logos as PNG/JPG/SVG) live here:

```
src/assets/projects/<project-name>/
```

For example:

- `src/assets/projects/exitfive/preview.png`
- `src/assets/projects/exitfive/1.jpg`
- `src/assets/projects/exitfive/logo.svg`

### Option A — Replace an existing image (easiest, recommended)

If you want to swap an image **without changing anything in the JSON**, just give your new file the **exact same name** as the old one. You can do this entirely inside the GitHub.dev editor:

1. In the **file tree on the left**, open `src/assets/projects/exitfive/` (or whichever project) by clicking the folder names.
2. **Right-click** the file you want to replace (e.g. `1.jpg`) and choose **Delete**. Confirm if asked.
3. Drag your new file from your computer **directly into that same folder** in the file tree. Or right-click the folder and choose **Upload...**.
4. **Make sure your new file has the exact same name** as the one you deleted (e.g. `1.jpg`). If the names don't match, rename your file before uploading, or right-click it after upload → **Rename**.
5. Open the **Source Control** panel. Because the new file has the same name as the old one, you'll see a single entry with an **`M`** (modified) next to it. **Stage** it, write a short message, and click **Commit & Push**.

Done. The website will use the new image automatically.

> Tip: keep the **same file extension**. If the old file was `.jpg`, your new one should also be `.jpg`. If it was `.png`, keep `.png`.

### Option B — Add a brand new image

1. In the file tree, open `src/assets/projects/exitfive/` (or whichever project).
2. Drag your new image from your computer **into that folder** in the file tree. Use a simple name like `new-photo.jpg` (lowercase, no spaces).
3. Open the matching JSON file in `src/data/projects/` (e.g. `exitfive.json`).
4. Find the spot where you want the image to appear and add a new media block:

```json
{ "type": "media", "files": ["../../assets/projects/exitfive/new-photo.jpg"] },
```

Make sure there is a comma `,` at the end of the previous block.

### Image path rule

For images, the path **always** starts with:

```
../../assets/projects/<project-folder>/<file-name>
```

---

## 🎬 How to replace project videos

Videos (`.mp4` files) work a little differently from images. They live in the **`public/`** folder, not in `assets/`:

```
public/projects/<project-name>/
```

For example:

- `public/projects/exitfive/3.mp4`
- `public/projects/exitfive/6.mp4`

### Replace an existing video

Same idea as images — give your new video the **same file name** as the one you're replacing. You can do it all inside the GitHub.dev editor:

1. In the file tree on the left, open `public/projects/exitfive/` (or whichever project).
2. **Right-click** the video you want to replace (e.g. `3.mp4`) and choose **Delete**.
3. Drag your new video from your computer **into that same folder** (or right-click the folder → **Upload...**).
4. **Name it exactly like the old one** (e.g. `3.mp4`). Rename it after upload if needed (right-click → **Rename**).
5. Open **Source Control** — you'll see a single **`M`** (modified) entry for that file. **Stage** it, write a message, and click **Commit & Push**.

### Add a brand new video

1. In the file tree, open `public/projects/<project-name>/` and drag your new video into it. Use a simple name, lowercase, no spaces, e.g. `intro.mp4`.
2. Open the project's JSON file in `src/data/projects/` and add a new media block where you want it to appear:

```json
{ "type": "media", "files": ["/projects/exitfive/intro.mp4"] },
```

### Video path rule (very important — different from images!)

For videos, the path **always** starts with a single `/`:

```
/projects/<project-folder>/<file-name>.mp4
```

Examples:

- ✅ Correct: `"/projects/exitfive/3.mp4"`
- ❌ Wrong: `"../../assets/projects/exitfive/3.mp4"`
- ❌ Wrong: `"public/projects/exitfive/3.mp4"`

> Quick rule of thumb:
>
> - **Images** → live in `src/assets/...` → path starts with `../../assets/projects/...`
> - **Videos** → live in `public/...` → path starts with `/projects/...`

### Recommended video format

- Use **`.mp4`** (H.264 codec). Most video tools export this by default.
- Keep videos under ~10–15 MB when possible. Large videos slow down the site.
- No sound is needed — videos play muted on the website.

---

## ✅ Quick checklist before you commit

Before clicking **Commit & Push**, double-check:

1. Did you only change text **between the quotes** in JSON files?
2. Are all commas `,` and brackets `{ } [ ]` still in place?
3. Did you use the **right path** for the file you added?
   - Image → starts with `../../assets/projects/...`
   - Video → starts with `/projects/...`
4. Does your new file have a simple name (lowercase, no spaces, e.g. `cover.jpg`, not `Cover Final v2.JPG`)?

If something goes wrong, you can always undo your last change from the GitHub website: open the file, click the **History** button, and click **Revert** on the bad commit.

---

## 🧑‍💻 For developers

Local development uses [Astro](https://astro.build) with `pnpm`.

```text
/
├── public/                  ← static files served as-is (videos live here)
│   └── projects/<name>/*.mp4
├── src/
│   ├── assets/              ← images processed by Astro
│   │   └── projects/<name>/*.{jpg,png,svg}
│   ├── components/
│   ├── data/
│   │   └── projects/*.json  ← project content (texts + media references)
│   ├── layouts/
│   └── pages/
└── package.json
```

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
