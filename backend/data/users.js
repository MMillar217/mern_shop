import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Marc Millar',
        email: 'marc.millar.98@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Tony Stark',
        email: 'tonystark@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Crash Bandicoot',
        email: 'crashbandicoot@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users