const {Router} =require('express')
const router= Router()

const { getUser, createUser,getUserbyId }=require('../controllers/userController')

router.route('/login')
    .post(getUser)

router.route('/registro')
    .post(createUser)

router.route('/inicio')
    .get(getUserbyId)


/*router.route('/:id')
    .get()
    .put()
    .delete()*/

module.exports = router