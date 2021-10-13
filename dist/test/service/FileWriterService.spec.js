"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileWriterService_1 = require("../../lib/core/service/FileWriterService");
describe('FileWriterService test suite', () => {
    it('should be able to instanciate a new FileWriterService', () => {
        const service = new FileWriterService_1.default();
        expect(service).toBeTruthy();
    });
    it('should be able to tell if a specific file exists or not', () => {
        const service = new FileWriterService_1.default();
        const filepath = __filename;
        expect(service.fileExists(filepath)).toBeTrue();
    });
});
