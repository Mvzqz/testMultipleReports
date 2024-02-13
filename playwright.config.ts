import { defineConfig } from "@playwright/test";


export default defineConfig({
    testDir:'./test',
    reporter:[
        ['blob'],
        ['line']
    ],
    use:{
        trace:'on'
    }
})
