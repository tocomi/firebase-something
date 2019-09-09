import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

const createStore = () => {
  return new Vuex.Store({
    state: {
      users: [],
      todos: [],
    },
    mutations: {
      ...vuexfireMutations,
    },
    actions: {
      setUsersRef: firestoreAction(({ bindFirestoreRef }, ref) => {
        bindFirestoreRef('users', ref)
      }),
      setTodosRef: firestoreAction(({ bindFirestoreRef }, ref) => {
        bindFirestoreRef('todos', ref)
      }),
    },
    getters: {
      getUsers: (state) => {
        return state.users
      },
      getTodos: (state) => {
        return state.todos
      }
    },
  })
}

export default createStore