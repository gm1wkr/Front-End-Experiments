# Consta Patio Bistro Code Sprint
Personal challange to code a small website from the ground up in two days.  Emphasis on practicing CSS skills and becoming more comfy with Grid and Flex.

The challange is to replicate the overall feel of [Rachel Andrews' CodePen Demo](https://codepen.io/jlengstorf/pen/wvaQXEr) but with my own spin.

Code will be hand written and use no frameworks.  

## The Fictional Bistro
__Consta Patio Bistro__ is the type of place that serves food on slate and is frequented by young groovy people who wear Beats headphones while slurping on a smoothy.  

__The fictional owners, Bob and Maria, are dedicated to their craft and have wicked senses of humour (they told me to make the placeholder text like that, honestly).__

## TODO's

Having spent the time budget (and more) the state of play is okay but has plenty of room for improvement.

## Things to improve
* Improve CSS to be less verbose
* Tidy up CSS class names and rationise overly verbose selectors.
    * Consider using SCSS
    * Consider using loose BEM convention
* Prepare for Web components
    * ? Use Review section as Web Component experiment.
    * SCSS

## Design

### Page Wide

The page feels too boxy, a curve would not go amiss but will complicate the markup for very little gain.  Perhaps reduce border contrasts and strengthen radial gradients.

* Increase responsivness
    * Rationalise breakpoints
    * responsive Image sets
    * Responsive text size (regardless of breakpoints)
    * Limit width on Large screens (<1920px>)
    * Typography is unbalanced
    * Z stacking can be improved (more material design)
        * It is currently confussed

### Navigation
* Improve 
    * Collapsable CSS only Navigation for small screens (Hamburger... Mmmmm)

### Header

* Make better use of header on wide screen (address maybe)

### Hero Section
The Hero section does replicate the original design but the pseudo element beneath the hero image does not add to the design much.  A subtle curve may have worked better?

* remove the offset border pseudo element.
* balance whole section vertically
* add subtle background gradient to visually seperate section from siblings.
* preserve overall feel of the Hero section


### Main Panel
The grid panel would better be described as 'featured dishes'.  The royalty free images have been very quickly cropped, some adjusted in brightness but are not at all optimised.  A hover effect has been added which (IMHO) does add to the page, it would display the dishes description.

* Use coherent images
* Provide different resolutions for a source set.
* adjust grid on the min 900px break point (first image span 2)
* typography is jarring

### Reviews

The reviews section could be made into a web component as a seperate sprint project.

* Reduce boxyness
* Span title across whole card width
* Reduce photo size (especially <900px) 

### Footer

The footer is currently just a place holder.

## Photos
Photos from [UnSplash](https://unsplash.com/)


## Inspirations of note.

* Rachel Andrews
* Jen Simmons
* Miriam Suzanne
* Bonzo Dog Doo Dah Band