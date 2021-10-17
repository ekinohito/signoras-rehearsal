import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        color: {
            primary: string
            primaryLight: string
            positive: string
            negative: string
            panel: string
            black: string
        }
    }
}