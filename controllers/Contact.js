const Contact = require('../models/Contact')

exports.addContact=
    async (req,res)=>{
        const{email}=req.body
        
            try {
                const newContact = new ContactSchema(req.body)
        
        const found = await ContactSchema.findOne({email})
        if (found) {return  res.status(400).send('Contact exists') }
               await newContact.save()
        res.status(200).send({msg: "contact added", newContact })
        
            } catch (error) {
                res.status(500).send("couldn't add contact")
            }
        
        } 
        

        exports.getContact=async (req,res)=>{
            try {
            const Contact =   await ContactSchema.find()    
        res.status(200).send({ msg: "list of contacts " , Contact })
        
            } catch (error) {
                res.status(500).send(" couldn't get contacts ")
            }
        }


        exports.DeleteContact= async (res,req)=>{
            const {id}=req.params
        
        try {
            const deleted = await ContactSchema.findByIdAndDelete(id)
        
        res.status(200).send({msg:'contact deleted' , deleted})
        
        } catch (error) {
            res.status(500).send({msg:'contact not deleted'})
        }
        
        } 


        exports.putContact=async (req,res)=>{
            const {id}=req.params
            try {
                const update = await ContactSchema.findByIdAndUpdate(id , {$set :{ ...req.body}})
            res.status(200).send({msg:'contact updated'}  , updated)
            } catch (error) {
                res.status(500).send({msg:'contact not updatetd'})
            }
            
            } 
            
        
