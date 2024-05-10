## Why?

- Generate a template for an affirmation immediately.
- Save time by _not_ entering deponent name and case number 4-5 times in different places.

## Try it [here](https://3willows.github.io/quickAffirmation/)

## Instructions

1. Fill in the boxes, click "OUTPUT" button.
2. The heading, endorsement and backsheet are automatically generated.
3. Revisions can be made by clicking the "REVISE" button.

## Video demo

https://github.com/3willows/quickAffirmation/assets/111284156/1dbe2678-772d-431d-ad68-d3f996e2e935

<!-- [This mobile video demo is commented out](https://github.com/3willows/quickAffirmation/assets/111284156/1257b8af-6792-4155-951e-142d35f13611
)-->


## Not included

- Information that needs to be fill in after the papers are printed (e.g. independent firm who attests the affirmation; filing date)

## Planned future features

- Provide a Word document to users, via [html-css-export-word](https://github.com/3willows/html-css-export-word),
- Other legal documents, including summons
- Reminder about jurat rule (last page of affirmation cannot just be a signature page).

## Development plan (with guidance from [Seongkuk](https://github.com/hsk-kr))

- Migrate to Vite or something other CRA (to make development faster)

- Design separate components with StoryBook
- CSS with Daisy UI (query compatability with html-css-export-word; likely to fix on that level)
- Restructure the directory structure
- Systematic internationalisation with [i18n](https://www.npmjs.com/package/i18n)
- Rewrite in Typescript
- Use a context library (e.g. Redux) mainly to be familiar with the toool
- Add Test Code 