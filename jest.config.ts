import type {Config} from '@jest/types';

const config = {
    moduleFileExtensions: [
        "ts",
        "js"
    ],
    transform: {
        "^.+\\.ts$": "ts-jest"
    },
    globals: {
        "ts-jest": {
            "tsConfig": "tsconfig.json"
        }
    },
    testMatch: [
        "**/test/**/*.spec.ts"
    ]
}
export default config;
