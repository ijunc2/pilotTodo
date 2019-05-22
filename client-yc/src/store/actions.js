import {fetchList, whoAmI} from "../apis";

export default {
  WHO_AM_I: (context, {name, func}) => {
    whoAmI('/api/login', {name})
      .then(res => {
        context.commit('SET_SESSOIN', res.data.user)
        func();
      })
      .catch()
  },
  FETCH_TODO: (context) => {

  }

}