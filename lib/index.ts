#!/usr/bin/env node

import { START_APPLICATION } from "./core/config/app.constants";
import { facade } from "./core/config/facade";

facade.sendNotification(START_APPLICATION);

