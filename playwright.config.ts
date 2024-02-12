import { defineConfig } from "@playwright/test";


export default defineConfig({
    testDir:'./test',
    reporter:[
        ['blob'],
        ['line'],
        ['html']
    ],
    use:{
        trace:'on'
    }
})
