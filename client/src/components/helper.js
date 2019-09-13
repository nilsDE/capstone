import axios from 'axios';

export function isLoggedIn() {
  console.log('fired')
  axios.get('/users/verify')
  .then(res => {
    this.setState({ loggedIn: res.data.msg });
  })
  .catch(err => {
    console.log(err);
  })
}