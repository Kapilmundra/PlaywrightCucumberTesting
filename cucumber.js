module.exports = {
    default: {
        paths: [
            "features/"
        ],
        require: [
            "src/steps/*.ts",
            "src/common/hooks.ts"
        ],
        formatOptions: {
            snippetInterface: "async-await"
        },
        format: [
            [
                "html",
                "test-result/reports/cucumber-report.html"
            ],
            "progress-bar",
            "json:test-result/reports/cucumber-report.json"
        ],
        requireModule: ["ts-node/register"],
        dryRun: false,
        parallel: 3
    }
};