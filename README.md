## Why?

- Quickly prototype an affirmation.
- Save time by *not* entering deponent name and case number 4-5 times all over the place.
- Intended users: HK lawyers/clerks/law students.

## Try it [here](https://3willows.github.io/quickAffirmation/)

## Video demo

https://github.com/3willows/quickAffirmation/assets/111284156/1dbe2678-772d-431d-ad68-d3f996e2e935

<!-- [This mobile video demo is commented out](https://github.com/3willows/quickAffirmation/assets/111284156/1257b8af-6792-4155-951e-142d35f13611
)-->

## How?


1. Fill in the boxes, click "OUTPUT" button.
2. The heading, endorsement and  backsheet are automatically generated.
3. Revisions can be made by clicking the "REVISE" button.


## Planned future features


- [ ] More party names (e.g. Applicant/Respondent etc) ideally responsive to the case type
- [ ] A testing framework
- [ ] Consistent naming of files/use of props v. children

## Known issues


- [x] Case type is reset after revising.

## Not included
- Information that appears only once (e.g. firm name)
- Information that needs to be fill in when affirming/filing (e.g. indpendent solicitors who affirm; filing date)
- Reminder about jurat rule (last page of affirmation cannot just be a signature page).
  
## History

- [x] Deploy react version
- [x] Think through the treatment of uppercase characters (i.e. use toUpperCase() consistently)
- [x] Add pop-up.
- [x] After input for P/D accepted, empty the relevant text input box
- [x] Style with CSS: including moving the Plaintiffs/Defendants to the right.
- [x] Add video to explain how to use.
- [x] Chinese input + output
- [x] More case types (e.g. PI / EC)
- [x] District Court heading