<template lang="pug">
header
  .container-fluid.header_bg-gray
    .container.py-3
      .row.d-flex.align-items-center
        .col-2.d-flex.align-items-center.your-region
          div.text-nowrap.your-region__text Ваш регион:
          b-form-select.your-region__select(v-model="city")
            b-form-select-option.your-region__option(
              v-for="(city, index) in cities",
              :key="index",
              :value="city.value") {{city.text}}
        .col-2.telephone
          a.d-inline-block.telephone__link(href="tel:+7 (495) 885-45-47")
            BIconTelephoneFill.telephone__icon
            span.telephone__text +7 (495) 885-45-47
        .col
          b-nav.w-100.justify-content-between.header__top-nav.top-nav
            b-nav-item.top-nav__link О компании
            b-nav-item.top-nav__link Гарантия и возврат
            b-nav-item.top-nav__link Корпоративным клиентам
            b-nav-item.top-nav__link Дизайн-решение
  .container
    .row.d-flex.align-items-center.py-4
      .col.logo
        a.d-inline-block.logo__link(href="#")
          img.logo__img(src="/logo.png", alt="Логотип")
      .col-9
        b-nav.w-100.justify-content-between.header__bottom-nav.bottom-nav
          b-nav-item.bottom-nav__link Каталог
          b-nav-item.bottom-nav__link Магазины
          b-nav-item.bottom-nav__link Шоу-рум
          b-nav-item.bottom-nav__link Доставка и оплата
          b-nav-item.bottom-nav__link Дисконт
          b-nav-item.bottom-nav__link Контакты
    .row
      .col-10
        b-input-group.d-flex.form-choose-goods.position-relative
          b-form-input.flex-grow-1.input.form-choose-goods__input(type="text", placeholder="Я хочу купить..." )
          BIconSearch.position-absolute.form-choose-goods__search-icon
          template(#append)
            .position-relative
              b-button.position-absolute.form-choose-goods__button(squared, variant="light")
                BIconArrowRightCircle.form-choose-goods__arrow-icon
              b-form-select.form-choose-goods__select(v-model="category")
                b-form-select-option.form-choose-goods__option(
                  v-for="(category, index) in categories",
                  :key="index",
                  :value="category.value") {{category.text}}
      .col.d-flex.justify-content-end
        .d-flex.user-actions
          b-button.user-actions__button(squared, variant="light")
            BIconPerson.user-actions__icon.user-actions__icon_person
          b-button.position-relative.user-actions__button(squared, variant="light")
            div.position-absolute.user-actions__count {{0}}
            BIconCart3.user-actions__icon.user-actions__icon_chart
</template>

<script>
import { BIconSearch, BIconPerson, BIconCart3, BIconTelephoneFill, BIconArrowRightCircle } from 'bootstrap-icons-vue';

export default {
  name: 'AppHeader',
  components: { BIconSearch, BIconPerson, BIconCart3, BIconTelephoneFill, BIconArrowRightCircle },
  data() {
    return {
      city: 'Moscow',
      cities: [{ value: 'Moscow', text: 'Москва' },
        { value: 'Kazan', text: 'Казань' },
        { value: 'Ufa', text: 'Уфа' },
        { value: 'Perm', text: 'Пермь' }],
      category: null,
      categories: [
        { value: null, text: 'Категория' },
        { value: 'Sofas', text: 'Диваны' },
        { value: 'Dressers', text: 'Комоды' },
        { value: 'Armchairs', text: 'Кресла' },
        { value: 'Chairs', text: 'Стулья' },
        { value: 'Puffs', text: 'Пуфы' },
        { value: 'Tables', text: 'Столы' },
        { value: 'Beds', text: 'Кровати' },
        { value: 'Accessories', text: 'Аксессуары' },
        { value: 'Cabinets', text: 'Тумбы' }],
    }
  },
}
</script>

<style lang="sass">
.top-nav__link > .nav-link
  font-size: 14px
  line-height: 14px
  color: $gray
  padding: 0px 5px
  transition: color .3s ease-in-out, background-color .3s ease-in-out
  &:hover
    color: $primary
  &:focus-visible
    color: $primary-shade
    background-color: $pink-violet
  &:active
    color: $primary-shade
    background-color: transparent
.bottom-nav__link > .nav-link
  //font-size: 14px
  //line-height: 14px
  color: $black
  padding: 0px 5px
  transition: color .3s ease-in-out, background-color .3s ease-in-out
  &:hover
    color: $primary
  &:focus-visible
    color: $black
    background-color: $pink-violet
  &:active
    color: $primary-shade
    background-color: transparent
</style>

<style scoped lang="sass">
.header
  &_bg-gray
    background-color: $gray-light
.telephone
  font-size: 14px
  line-height: 14px
  &__link
    padding: 4px
    transition: background-color .3s ease-in-out
    &:hover
      & > .telephone__icon
        fill: $secondary-light
      & > .telephone__text
        color: $secondary-light
    &:focus-visible
      background-color: $secondary-shade
      & > .telephone__icon
        fill: $secondary
      & > .telephone__text
        color: $secondary
    &:active
      & > .telephone__icon
        fill: $secondary-shade
      & > .telephone__text
        color: $secondary-shade
    &:focus-visible
      background-color: $secondary-shade
  &__icon
    fill: $secondary
    transition: fill .3s ease-in-out
  &__text
    color: $secondary
    transition: color .3s ease-in-out
.logo
  &__img
    width: 187px
    height: 27px
.your-region
  &__select
    color: $primary
    padding: 0px 4px
    border: none
    border-radius: 0
    background-color: transparent
    transition: color .3s ease-in-out, background-color .3s ease-in-out
    &:hover
      color: $primary-light
    &:focus-visible
      color: $primary-shade
      background-color: $pink-violet
    &:active
      color: $primary-shade
      background-color: transparent
  &__option
    color: $black
.form-choose-goods
  &__input
    line-height: 19px
    color: $black
    padding-left: 59px
    background-color: $gray-light
    border: 2px solid $gray-light
    border-radius: 6px 0 0 6px !important
    transition: background-color .3s ease-in-out, border-color .3s ease-in-out
    &::placeholder
      color: $gray
    &:hover
      background-color: $md-gray
      border-color: $md-gray
    &:focus-visible
      background-color: $pink-light
      border-color: $primary
    &:active
      background-color: $gray-light
      border-color: $gray-light
      & + .form-choose-goods__search-icon
        fill: $primary
  &__search-icon
    z-index: 10
    top: 11px
    left: 34px
    width: 15.9px
    height: 15.4px
    fill: $gray
    transition: fill .3s ease-in-out
  &__button
    z-index: 5
    top: 0
    left: -18%
    background-color: transparent
    border-color: transparent
    //.btn-content
    //  display: flex
    //  align-items: center
    &:hover
      background-color: transparent
      border-color: transparent
  &__arrow-icon
    fill: $primary
  &__select
    width: 300px
    color: $primary
    border: 2px solid $gray-light
    border-top-left-radius: 0
    border-bottom-left-radius: 0
    transition: background-color .3s ease-in-out, border-color .3s ease-in-out
    &:hover
      border-color: $primary
    &:focus-visible
      background-color: $pink-light
      border-color: $primary
    &:active
      background-color: transparent
      border-color: $primary-shade
  &__option
    color: $black
.user-actions
  width: 50%
  justify-content: space-between
  &__button
    padding: 4px
    background-color: transparent
    border: none
    transition: background-color .3s ease-in-out
    &:hover * .user-actions__icon
      fill: $primary-light
    &:focus-visible
      background-color: $primary-light
      & * .user-actions__icon
        fill: $white
    &:active
      background-color: transparent
      & * .user-actions__icon
        fill: $primary-shade
  &__icon
    fill: $primary
    transition: fill .3s ease-in-out
    &_person
      width: 26px
      height: 28px
    &_chart
      width: 30px
      height: 28px
  &__count
    top: 10px
    left: -8px
    width: 14px
    height: 15px
    font-size: 10px
    line-height: 14px
    font-weight: 700
    color: $white
    text-align: center
    background-color: $secondary
    border-radius: 100%
</style>