#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_constants_1 = require("./core/config/app.constants");
const facade_1 = require("./core/config/facade");
facade_1.facade.sendNotification(app_constants_1.START_APPLICATION);
