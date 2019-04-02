/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Hero from './Hero.vue'

storiesOf('Hero', module)
  .add('Default', () => ({
    components: { Hero },
    template: '<hero></hero>',
    methods: { action: action('clicked') }
  }))
