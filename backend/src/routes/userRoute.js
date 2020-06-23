const {Router} =require('express')
const router= Router()

const { getUser, createUser }=require('../controllers/userController')

router.route('/login')
    .post(getUser)

router.route('/registro')
    .post(createUser)


/*router.route('/:id')
    .get()
    .put()
    .delete()*/

module.exports = router