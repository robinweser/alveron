import { useFela } from 'react-fela'

export default function useTheme() {
  const { theme } = useFela()

  return theme
}
