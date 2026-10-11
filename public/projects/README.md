# Put project screenshots in this folder.

Example:

```
public/projects/expense-tracker.png
```

Then reference it in `src/data/portfolio.js`:

```js
{ id: 'expense-tracker', image: '/projects/expense-tracker.png', ... }
```

If a project has `image: ''`, the card shows an automatic gradient
placeholder instead — so the site works fine before you add any images.
