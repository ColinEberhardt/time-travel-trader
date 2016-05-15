export default function merge<T>(state: T, mutations: any): T {
  return Object.assign({}, state, mutations)
}
