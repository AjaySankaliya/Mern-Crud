const express=require('express')
const router=express.Router()
const {addUser,getUser,getUserById,updateUser,deleteUser}=require('../controller/user_controller')

router.post('/',addUser)
router.get('/',getUser)
router.get('/:id',getUserById)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports=router