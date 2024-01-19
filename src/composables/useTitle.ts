import { useTitle } from '@vueuse/core'

export function usePageTitle(title: string) {
  useTitle(`${title} | T-Shirt Store`)
};