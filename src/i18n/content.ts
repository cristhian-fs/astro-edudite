import type { ContentSchema } from "./types";

export const SITE_CONTENT: ContentSchema = {
  home: {
    hero: {
      title: {
        en: "Hi, I'm Cristhian 👋",
        'pt-br': "Oi, eu sou Cristhian 👋",
      },
      myself_description: {
        en: "Frontend developer based in Brasil.",
        'pt-br': "Desenvolvedor Frontend baseado em Brasil.",
      },
      description: {
        en: "Im currently focused on building solid, accessible, and maintainable interfaces. I have the most experience with React, TypeScript, and the modern web stack, but I'm always up for learning whatever's needed to solve things properly.",
        'pt-br': "Atualmente, estou focado em criar interfaces sólidas, acessíveis e fáceis de manter. Tenho mais experiência com React, TypeScript e a pilha web moderna, mas estou sempre disposto a aprender o que for necessário para resolver os problemas da maneira adequada."
      },
      components: {
        resume_button_text: {
          en: "Resume",
          'pt-br': "Curriculo",
        }
      }
    },
    techs: {
      text: {
        en: "Techs that I use",
        'pt-br': "Tecnologias que uso",
      }
    },
    craft: {
      title: {
        en: "Craft",
        'pt-br': "Craft",
      },
      see_all_crafts_button: {
        en: "See all crafts",
        'pt-br': "Ver todos os crafts",
      }
    },
    projects: {
      title: {
        en: "Projects",
        'pt-br': "Projetos",
      },
      see_all_projects_button: {
        en: "See all projects",
        'pt-br': "Ver todos os projetos",
      }
    },
    posts: {
      title: {
        en: "Posts",
        'pt-br': "Postagens",
      },
      see_all_posts_button: {
        en: "See all posts",
        'pt-br': "Ver todos as postagens",
      }
    },
  },
  projects: {
    components: {
      breadcrumbs: {
        current_page_crumb_text: {
          en: 'Projects',
          'pt-br': 'Projetos',
        }
      },
      project_card: {
        status_text: {
          in_progress: {
            en: 'In progress',
            'pt-br': 'Em andamento',
          },
          completed: {
            en: 'Completed',
            'pt-br': 'Concluído',
          }
        }
      },
      project_navigation: {
        prev_post: {
          en: 'Previous project',
          'pt-br': 'Projeto anterior',
        },
        next_post: {
          en: 'Next project',
          'pt-br': 'Próximo projeto',
        },
        next_post_empty_text: {
          en: 'Latest post!',
          'pt-br': 'Você está no ultimo projeto',
        },
        prev_post_empty_text: {
          en: 'Last post!',
          'pt-br': 'Você está no ultimo projeto',
        }
      }
    },
    content: {
      title: {
        en: "Here are some of the projects I've worked on. (-_-)",
        'pt-br': "Aqui estão alguns dos projetos em que trabalhei. (-_-)",
      }
    }
  },   
}
