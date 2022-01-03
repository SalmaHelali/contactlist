const express = require('express')
const { addContact, getContact, DeleteContact, putContact } = require('../controllers/Contact')
const Contact = require('../models/Contact')
const ContactSchema = require('../models/Contact')

const ContactRoute=express.Router()



//method post
// req.body
//   /addContact



ContactRoute.post("/addContact", addContact )

//meth Get
//url 

ContactRoute.get('/' , getContact)


//method get req.params
//  /:id

ContactRoute.get ('/:id' , (req,res)=>{

const{id}= req.params

try {
    const foundContact = ContactSchema.find()
    res.status(200).send({msg:'contact found', foundContact } )
} catch (error) {
    res.status(500).send({msg:'contact not found'})
}

} )


//delete req.params

//   /deleteContact/:id


ContactRoute.delete('/deleteContact/:id'  , DeleteContact)

//method put
//req.params req body
//   /updateContact/:id

ContactRoute.put('/updateContact/:id',  putContact)



module.exports=ContactRoute