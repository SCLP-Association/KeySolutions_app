// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import router from '../router/index';

const state = {
  token: localStorage.getItem('token') || '',
  user:{},
  status:'',
  vqtests:{}
};

const getters={
  // isLoggedIn: function(state){
  //   if(state.token !='' ){
  //     return true
  //   }else{
  //     return false
  //   }
  // }
  vqtests:state=>state.vqtests,
  isAdmin: function(state){
    if(state.user.type == "admin"){
      return true
    }else{
      return false
    }
  },
  isLoggedIn:state => !!state.token, //odozgo kod samo skracen
  authState: state => state.status,
  user: state => state.user
};

const actions ={
//Login action
// eslint-disable-next-line no-unused-vars
async login({commit},user){
  commit('auth_request');
  let res = await axios.post('/api/users/login', user)
  if(res.data.success){
    // eslint-disable-next-line no-unused-vars
    const token = res.data.token;
    // eslint-disable-next-line no-unused-vars
    const user = res.data.user;
    //Store the token into the local localStorage
    localStorage.setItem('token',token);
    //Set the axios defaults
    axios.defaults.headers.common['Authorization']=token;
    commit('auth_success',token,user);
  }
  return res;
},
//Register user
async register({
  commit
},userData){
  commit('register_request');
  let res = await axios.post('/api/users/register', userData);
  if(res.data.success !== undefined){
    commit('register_success');
  }
  return res;
},
//Get profile
async getProfile({commit}){
  commit('profile_request');
  let res = await axios.get('/api/users/profile');
  commit('profile_present',res.data.user);
  return res;
},

//Logout
async logout({commit}){
  await localStorage.removeItem('token');
  commit('logout');
  delete axios.defaults.headers.common['Authorization'];
  router.push('/login');
  return;
},
//Submit VQTest
async submitVQ({
  commit
},vqData){
  commit('vq_request');
  let res = await axios.post('/api/vqtests/submit', vqData);
  if(res.data.success !== undefined){
    commit('submitVQ_success');
  }
  return res;
},
//Get items
async getVQTests({ //art
  commit
}){
  commit('vqtests_request');
  let res = await axios.get('/api/vqtests/getAll');
  commit('vqtests',res.data);
  console.log(res.data);
  return res;
},

};

const mutations = {

  auth_request(state){
    state.status = 'loading'
  },
  auth_success(state,token,user){
    state.token = token
    state.user = user
    state.status = 'success'
  },
  register_request(state){
    state.status = 'loading'
  },
  register_success(state){
    state.status = 'success'
  },
  logout(state){
    state.status = ''
    state.token = ''
    state.user = ''
  },
  profile_request(state){
    state.status = 'loading'
  },
  profile_present(state,user){
    state.user = user
  },
  vq_request(state){
    state.status='loading'
  },
  submitVQ_success(state){
    state.status = 'success'
  },
  vqtests_request(state){
    state.status='loading'
  },
  vqtests(state,vqtests){
    state.vqtests=vqtests
    state.status='success'
  }

};

export default{
  state,
  actions,
  mutations,
  getters
}
