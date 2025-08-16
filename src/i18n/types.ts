import { LOCALES_SETTING } from "./locales";

/**
 * User-defined locales list
 * @constant @readonly
 */
export const LOCALES = LOCALES_SETTING as Record<string, LocaleConfig>;
type LocaleConfig = {
  readonly label: string;
  readonly lang?: string;
  readonly dir?: "ltr" | "rtl";
};

/**
 * Type for the language code
 * @example
 * "en" | "ja" | ...
 */
export type Lang = keyof typeof LOCALES;
/**
 * Type for the multilingual object
 * @example
 * { en: "Hello", ja: "こんにちは", ... }
 */
export type Multilingual = { [key in Lang]?: string };


/**
 * Tipo recursivo para objetos de tradução
 */
export type TranslationObject<T> = {
  [K in keyof T]: T[K] extends string
    ? Multilingual
    : TranslationObject<T[K]>;
};

export type ContentSchema = {
  home: {
    hero: {
      title: Multilingual;
      description: Multilingual;
      myself_description: Multilingual;
      components: {
        resume_button_text: Multilingual;
      }
    }
    techs: {
      text: Multilingual;
    }
    projects: {
      title: Multilingual;
      see_all_projects_button: Multilingual;
    }
    craft: {
      title: Multilingual;
      see_all_crafts_button: Multilingual;
    }
    posts: {
      title: Multilingual;
      see_all_posts_button: Multilingual;
    }
  }
  projects: {
    components: {
      breadcrumbs: {
        current_page_crumb_text: Multilingual
      }
      project_card:{
        status_text: {
          in_progress: Multilingual;
          completed: Multilingual;
        }
      }
      project_navigation: {
        prev_post: Multilingual;
        next_post: Multilingual;
        prev_post_empty_text: Multilingual;
        next_post_empty_text: Multilingual;
      }
    }
    content: {
      title: Multilingual;
    }
  }
}