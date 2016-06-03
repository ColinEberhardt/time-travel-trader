declare module 'remote-redux-devtools' {

    type StringOrArray = string | string[]

    interface Config {
      name?: string
      realtime?: boolean
      hostname?: string
      port?: number
      secure?: boolean
      filters?: {[key: string]: string}
      maxAge?: number
      startOn?: StringOrArray
      stopOn?: StringOrArray
      sendOn?: StringOrArray
      sendOnError?: number
      sendTo?: string
      id?: string
    }

    function devTools(config?: Config): Function

    namespace devTools {}

    export = devTools
}
