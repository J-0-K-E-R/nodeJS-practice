const express = require('express')
const uuid = require('uuid')
const router = express.Router()
const members = require('../../Members')


// Gets all functions
router.get('/', (req, res) => {
    
    res.json(members)
})

// Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({msg: `Member not found for id: ${req.params.id}`})
    }
})

// Create Member
router.post('/', (req, res) => {
    const newMem = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newMem.name || !newMem.email) {
        return res.status(400).json({ msg: 'Please include name/email'})
    } 

    members.push(newMem)

    res.json(members)
    // res.redirect('/')
})


// Update Member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found){
        const updMem = req.body
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)){
                member.name = updMem.name ? updMem.name : member.name
                member.email = updMem.email ? updMem.email : member.email

                res.json({ msg: 'Member updated!', member})
            }
        })
    } else {
        res.status(400).json({msg: `Member not found for id: ${req.params.id}`})
    }
})

// Delete member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found){
        res.json({ msg:'Member deleted', members: members.filter(member => member.id !== parseInt(req.params.id))})
    } else {
        res.status(400).json({msg: `Member not found for id: ${req.params.id}`})
    }
})


module.exports = router