/**
 * @fileoverview eslint-plugin-web
 * @author 唯然<weiran.zsd@outlook.com>
 */
"use strict";

const ruleIds = ["no-alert", "no-script-url", "no-console"];
const all = {};
const rules = {};

for (const ruleId of ruleIds) {
    all[ruleId] = 2;
    rules[ruleId] = require(`../lib/${ruleId}.js`);
}

module.exports = {
    configs: {
        all: {
            plugins: ["web"],
            rules: all
        }

    },
    rules
};