const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

 user.mood = 'happy';

const user2 = {
    hobby: 'skydiving',
    premium: false
}

const newUser = {...user, ...user2}

console.log(Object.entries(newUser));