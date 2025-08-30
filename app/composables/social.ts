
export function useSocials() {
  return useAsyncData('socials', () => queryCollection('socials').first())
}
