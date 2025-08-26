import type * as NuxtUI from '@nuxt/ui'

declare global {

  type NavigationMenuItem = NuxtUI.NavigationMenuItem

  export interface SocialLink {
    name: string
    url: string
    icon: string
  }
  export interface SocialItem {
    name: string
    url: string
    icon?: string
  }
  export interface SocialsFile {
    socials: SocialItem[]
  }
}
