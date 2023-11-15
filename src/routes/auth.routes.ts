import { Router } from 'express'

const router = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/', () => {
  console.log('asdasd')
})

export { router as loginRouter }
