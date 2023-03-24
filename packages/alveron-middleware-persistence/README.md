# alveron-middleware-persistence

```js
import persistence from 'alveron-middleware-persistence'
import { useStoreWithMiddleware } from 'alveron'

const useStore = useStoreWithMiddleware([
  persistence({
    key: 'MY_SECRET_DATA',
    getStorage: () => localStorage,
    onHydrated: () => console.log('STORE IS HYDRATED FROM STORAGE'),
  }),
])
```
