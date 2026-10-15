# Aszad Hossain Akib, Portfolio

Personal portfolio website. Plain HTML, CSS and JavaScript, no build step. Hosted free on GitHub Pages.

## Files

```
index.html     Page shell and navigation bar
data.js        ALL your content (edit this file to change text, awards, experience...)
app.js         Builds the pages from data.js (no need to edit)
style.css      Colors, fonts and layout (colors are at the top)
assets/
  profile.jpg                 Your photo
  Aszad_Hossain_Akib_CV.pdf   The CV behind the "Download CV" button
.nojekyll      Tells GitHub Pages to serve the files as-is
```

The menu has: Home (with About Me and Education sections), Research
(Research Experience, Publications, Projects), Honors & Awards, Experience
(Internships, Teaching & Mentoring), Certifications & Training, Scientific
Activities, Leadership & Community and Contact. To change the menu, edit `NAV`
near the top of `app.js`.

## 1. Preview in VS Code

1. Unzip the folder and open it in VS Code (File > Open Folder).
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel.
3. Right-click `index.html` and choose **Open with Live Server**.
4. The site opens in your browser and refreshes every time you save a file.

## 2. Personalize

- **Links:** open `data.js`, find `links:` near the top, and paste your LinkedIn, GitHub, ResearchGate, ORCID and Google Scholar URLs between the quotes. Empty ones are hidden automatically.
- **Phone:** set `phone: ""` in `data.js` if you don't want it public.
- **Home page:** the spec rows under your name (Role, Training, Focus...) are in `HOME` at the top of `data.js`. Each row is `["Label", "Value"]`.
- **Content:** everything is in `data.js`, grouped by page (HOME, RESEARCH, HONORS...). To add an award or activity, copy an existing `{ ... }` block and change the text.
- **Photo:** replace `assets/profile.jpg` with any square photo (same file name).
- **Colors:** change the variables at the top of `style.css`.

## Certificates (Scientific Activities and Training)

Certificate PDFs live in `assets/certificates/`, with the file names listed in
`assets/certificates/README.txt`. To add one to another activity, put
`certificate: "assets/certificates/your-file.pdf"` on that activity in `data.js`.
Until a PDF is added, its button shows
"Certificate pending" automatically, so there are no broken links.

The "Certificate pending" check only works when the site runs on a server
(Live Server or GitHub Pages). If you just double-click `index.html`, the buttons
still show, but missing files won't switch to "pending".

## 3. Publish on GitHub Pages (free)

1. On GitHub, create a new **public** repository named exactly `YOUR-USERNAME.github.io`
   (replace YOUR-USERNAME with your GitHub username).
2. In VS Code, open the terminal (View > Terminal) inside the portfolio folder and run:

   ```bash
   git init
   git add .
   git commit -m "First version of my portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   git push -u origin main
   ```

3. On GitHub, go to the repository's **Settings > Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**, then Save.
4. After a minute or two, your site is live at `https://YOUR-USERNAME.github.io`.

> Prefer clicking over the terminal? Use VS Code's **Source Control** panel (the branch icon on the left): click *Publish to GitHub*, choose a public repo, and name it `YOUR-USERNAME.github.io`.

## 4. Updating later

Edit files, then:

```bash
git add .
git commit -m "Update portfolio"
git push
```

The live site updates within a minute or two.
