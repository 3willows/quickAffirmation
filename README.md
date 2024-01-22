## Why?

- Certain data (e.g. deponent name & case number) are repeated 4-5 times in the header, endorsement and backsheet of an affirmation.
- Enter the data once and the repetitions are automatically generated here.
- Lawyers can use this to quickly create a bare bones first draft / check the repetitions before filing.
  
## User story

1. Users: HK lawyers and clerks.
2. User fills in the boxes, click the only button "Output".
3. The heading, endorsement and the backsheet are generated.  An "Input" button  takes the user back for modifications as appropriate.
4. One-off information (e.g. firm name; place of affirmation) are not included.

## TO-DO

- [x] Deploy react version
- [ ] After input for P/D accepted, empty the relevant text input box
- [ ] Think through the treatment of uppercase characters (i.e. use toUpperCase() consistently
- [ ] Style with better CSS
- [ ] Media query and alert users that the App is not intended to be used on mobile phones
- [ ] Add pop-up to explain the minimalist hilosophy behind the webpage.
- [ ] Add video to explain how to use.

## Non-features
- [ ] Reminder about jurat rule
- [ ] Other case names/parties (e.g. HCZZ, Third Party)
      
## Potential future projects

- App to help lawyers calculate dates in civil litigation (there are at least 3 different rules for reckoning of dates).

Previous [incomplete version](https://github.com/3willows/easyAffirmation) in "vanilla" javascript.
