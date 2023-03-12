<template>
  <header>
    <h1 class="page__title">Colorful Rating Component for Vue projects</h1>
  </header>
  <main class="page__content">
    <div class="page__examples">
      <RatingExample heading="Classic star rating" componentName="SimpleStar">
      </RatingExample>

      <RatingExample heading="Heart rating" componentName="SimpleHeart">
      </RatingExample>

      <RatingExample heading="Gear rating with custom spacing" componentName="CustomSpacing">
      </RatingExample>

      <RatingExample heading="Large star rating" componentName="LargeStar">
      </RatingExample>

      <RatingExample heading="Rating with easy color change" componentName="DynamicColors">
      </RatingExample>

      <RatingExample heading="Resettable rating with custom inactive color" componentName="CustomInactive">
      </RatingExample>

      <RatingExample heading="Difficulty rating with descriptions" componentName="WithDescriptions">
      </RatingExample>

      <RatingExample heading="Rating with custom description style" componentName="DescriptionStyle">
      </RatingExample>

      <RatingExample heading="Multicolor rating" componentName="Multicolor">
      </RatingExample>

      <RatingExample heading="Read-only rating" componentName="ReadOnly">
      </RatingExample>

      <RatingExample heading="Rating with gradient" componentName="GradientLeaves">
      </RatingExample>

      <RatingExample heading="Rating with custom hover animation" componentName="GradientSnowflakes">
      </RatingExample>

      <RatingExample heading="Rating with color steps" componentName="ColorSteps">
      </RatingExample>

      <RatingExample heading="Rating with SVG icons as Vue component" componentName="SvgComponent">
      </RatingExample>

      <RatingExample heading="Rating with icons as external SVG" componentName="ExternalSvg">
      </RatingExample>

      <RatingExample heading="Rating with png icon" componentName="PngIcon">
      </RatingExample>

      <RatingExample heading="Read-only inline rating" componentName="ReadOnlyInline">
      </RatingExample>

      <RatingExample heading="Rating with path from variable" componentName="PathVariable">
      </RatingExample>

      <RatingExample heading="Rating with slot props usage" componentName="NumericalRating">
      </RatingExample>

      <RatingExample heading="SVG star rating with border" componentName="BorderedStar">
      </RatingExample>

      <RatingExample heading="SVG heart rating with border" componentName="BorderedHeart">
      </RatingExample>

      <RatingExample heading="Font Awesome rating" componentName="FontAwesomeThumbs">
      </RatingExample>

      <RatingExample heading="Font Awesome rating without hover effect" componentName="FontAwesomeSmileys">
      </RatingExample>
    </div>
  </main>
</template>

<script setup>
import RatingExample from "./components/RatingExample.vue"
</script>

<style scoped>
.page__content {
  width: 100%;
  height: 100%;
  margin: 0;
  padding-top: 1em;
}

.page__title {
  color: white;
  width: fit-content;
  max-width: 80%;
  margin: 0.5em auto;
  text-shadow: 1px 1px 3px rgba(120, 121, 120, 0.75);
}

.page__examples {
  display: grid;
  margin: auto;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  padding-bottom: 3em;
}

@media only screen and (max-width: 900px) {
  .page__examples {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 650px) {
  .page__examples {
    grid-template-columns: 1fr;
  }
}

</style>

<style>
body {
  background:
      linear-gradient(#25b242, transparent),
      linear-gradient(to top left, #fd9245, transparent),
      linear-gradient(to top right, #5f9cf8, transparent);
  background-blend-mode: screen;
  margin: 0;
}

</style>
