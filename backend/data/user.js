import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'ruby',
    email: 'ruby@email.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: false,
  },
  {
    name: 'ruby rana',
    email: 'rubyrana@email.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: false,
  },
];
export default users;
