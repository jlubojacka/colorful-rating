# Colorful rating

## Rating component for Vue.js

A simple, highly customizable component for any type of rating.

### Features

* Works with **Vue.js version 3**
* Use default star SVG or **own rating icon**
    - SVG as Vue component
    - inline SVG
    - Font Awesome icons
    - image (JPG, PNG)
* Customizable length
* Customizable styling via **CSS custom properties**
    - custom active and inactive color
    - custom size and spacing
    - color steps or gradient
* Use **v-model** to sync the rating between the component and its parent
* Animated on hover
* Read-only state
* Rating **descriptions**


### Usage and Examples

Basic usage:
```vue
<ColorfulRating v-model="ratingValue"></ColorfulRating>
```
Visit [Colorful Rating's GitHub pages](https://jlubojacka.github.io/colorful-rating/) for live demo. 
For each example there is a modal window with source code.

**Component properties**

| Property | Type |  Description | Default |
| -------- | ---- | ------------ |-------- |
| length | Number | number of stars shown | 5 |
| descriptions | Array | show description for chosen rating| empty array [] |
| readonly | Boolean | unable to interact | false |
| animateOnHover | Boolean | play animation on hover |  true |
| colorSteps| Array | number of colors must match the length of rating | [] |
| multicolor | Boolean | use it for image icons and SVG icons with style attribute |false|
| inactiveOpacity | Number | takes effect only if multicolor property is set | 0.7 |
| gradient | Object | color transition according to specified start/end lightness | {hue: 210, startLightness: 75, endLightness: 30} |


**CSS Custom Properties**
* --rate-color
* --rate-inactive-color
* --rate-icon-size
* --rate-border-color
* --rate-spacing
* --rate-description-color

With special [deep selector](https://vuejs.org/api/sfc-css-features.html#deep-selectors) you can affect children inside ColorfulRating component in your styles.
See [Rating with custom description style](https://jlubojacka.github.io/colorful-rating/#description-style) example.

**Slot props**

Use the slot called _index_ to replace default star icon  by alphabet, digit, Unicode, HTML element etc.
More info about slot props can be found on [Vue website](https://vuejs.org/guide/components/slots.html#named-scoped-slots).
```vue
<ColorfulRating v-model="rateValue">
  <template #default="{ index }">
    <span class="rating__number">{{index + 1}}</span>
  </template>
</ColorfulRating>
```
See [Rating with slot props usage](https://jlubojacka.github.io/colorful-rating/#numerical-rating) example.

### License

Colorful rating is licensed under The MIT License.

