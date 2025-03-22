const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-result/reports/",
  reportPath: "test-result/reports/",
  metadata: {
    browser: {
      name: "chrome",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Ebay site Testing",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});