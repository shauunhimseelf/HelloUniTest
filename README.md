# Hello Uni Code Test

Code test for Hello Uni Job application. 

This is my first time using Ionic and Angular 2, so I've documented here some of the changes I'd like to make with a bit more time and experience with the platform.

---


## General notes

As the test required similarity to the .pdf mock ups, I've done a fair bit of overriding styles. Additionally, in accordance with the pdf, I've made some fine tuning adjustments to the CSS of components to make them similar. Angular, sensibly, looks to use the device specific styles for a lot of components, so the changes to these feel a bit hacky and rely on a bit of `!important` to ensure styles are applied. 

In my own projects, I'd always aim to use as many device specific styles as possible, and work to a pre-agreed style guide for building components, for both consistency and speed. 


## Web browser styles

The Ionic components in a web browser now use the Material Design styles, so it will bring up a MD-style select box for the gender and nationality drop down boxes, rather than the browser defaults as per [Ionic GitHub issue 6003](https://github.com/driftyco/ionic/issues/6003).


## ngAfterViewInit() hack

As per [Angular GitHub issue 6005](https://github.com/angular/angular/issues/6005), theres an error on populating the tab-button component after it's been rendered - the code here uses a hack using `setTimeout` to fix this - I've followed the thread and would aim to fix when there is an agreement on how it should be done!


---

## About Page

I made some changes to the layout of the page from the brief - I decided using `display: flex` for the list of selected tabs would be best to achieve the layout from the brief, but this sometimes made the text entry field for the custom tags too small, it would also have knock on effects for the browser style, as I felt this requires an 'Add' button for UX/accessibility reasons. 

I also added some headings for the 2 boxes.


## Success Page

I've added a third page outside the brief as a signup success and to display the JSON object in the console (and add a Panda gif).


## Known Issues

- The slides shouldn't be movable until the form is validated on the first page, but on desktop, pressing the tab key can be used to access it before the form is validated - I didnt want to remove the tab functionality for accessibility reasons, but this would require seperate functionality to manage which I hadn't accounted for. 
- The about page is getting a bit heavy and there's a bit of repetition between the 2 functions for adding labels and lifestyles. In a future revision I'd be looking to DRY this out a bit and move the whole label selection to it's own component.
- On mobile, there is some popping on opening the keyboard on iOS and Android.
