/**
 * Define all valid translation keys as a TypeScript union type
 * This allows full intellisense and autocomplete when using `t('...')`
 * and prevents runtime translation key typos.
 */

export type TranslationKeys =
    | 'common.edit'
    | 'common.reset_project'
    | 'common.npm_run'
    | 'common.app_example'
    | 'common.app'

    | 'home.title'
    | 'home.text1'
    | 'home.text2'
    | 'home.text3'
    | 'home.text4'
    | 'home.text5'
    | 'home.text6'
    | 'home.text7'
    | 'home.text8'
    | 'home.text9'

    | 'settings.title'
    | 'settings.current_theme'
    | 'settings.dark_mode'
    | 'settings.light_mode'
    | 'settings.account'
    | 'settings.email'

    | 'template.title'
    | 'template.description'
    | 'template.file_routing.title'
    | 'template.file_routing.text_1'
    | 'template.file_routing.text_2'
    | 'template.file_routing.link'
    | 'template.platforms.title'
    | 'template.platforms.text'
    | 'template.images.title'
    | 'template.images.text'
    | 'template.images.link'
    | 'template.fonts.title'
    | 'template.fonts.text'
    | 'template.fonts.link'
    | 'template.theme.title'
    | 'template.theme.text'
    | 'template.theme.link'
    | 'template.animations.title'

    | 'profile.title'
    | 'profile.name'
    | 'profile.email'
    | 'profile.edit';