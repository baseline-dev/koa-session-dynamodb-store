"use strict";exports.__esModule=true;exports.API_VERSION=exports.DEFAULT_CALLBACK=exports.DEFAULT_TTL=exports.DEFAULT_WCU=exports.DEFAULT_RCU=exports.DEFAULT_USE_TTL_EXPIRED=exports.DEFAULT_TTL_KEY=exports.DEFAULT_HASH_KEY=exports.DEFAULT_TABLE_NAME=void 0;const DEFAULT_TABLE_NAME="sessions";exports.DEFAULT_TABLE_NAME=DEFAULT_TABLE_NAME;const DEFAULT_HASH_KEY="sessionId";exports.DEFAULT_HASH_KEY=DEFAULT_HASH_KEY;const DEFAULT_TTL_KEY="expires";exports.DEFAULT_TTL_KEY=DEFAULT_TTL_KEY;const DEFAULT_USE_TTL_EXPIRED=true;exports.DEFAULT_USE_TTL_EXPIRED=DEFAULT_USE_TTL_EXPIRED;const DEFAULT_RCU=5;exports.DEFAULT_RCU=DEFAULT_RCU;const DEFAULT_WCU=5;exports.DEFAULT_WCU=DEFAULT_WCU;const DEFAULT_TTL=86400000;exports.DEFAULT_TTL=DEFAULT_TTL;const DEFAULT_CALLBACK=err=>{if(err){throw err}};exports.DEFAULT_CALLBACK=DEFAULT_CALLBACK;const API_VERSION="2012-08-10";exports.API_VERSION=API_VERSION;