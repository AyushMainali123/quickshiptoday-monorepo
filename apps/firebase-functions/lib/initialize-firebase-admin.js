"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestore = exports.auth = exports.database = exports.admin = void 0;
const app_1 = require("firebase-admin/app");
const auth_1 = require("firebase-admin/auth");
const database_1 = require("firebase-admin/database");
const firestore_1 = require("firebase-admin/firestore");
function initializeAdminApp() {
    let admin = null;
    return function () {
        if (!admin) {
            admin = (0, app_1.initializeApp)();
        }
        return admin;
    };
}
const adminApp = initializeAdminApp();
exports.admin = adminApp();
exports.database = (0, database_1.getDatabase)(exports.admin);
exports.auth = (0, auth_1.getAuth)(exports.admin);
exports.firestore = (0, firestore_1.getFirestore)(exports.admin);
//# sourceMappingURL=initialize-firebase-admin.js.map