"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JournalController = void 0;
const common_1 = require("@nestjs/common");
const journal_service_1 = require("./journal.service");
const journalInput_dto_1 = require("./journalInput.dto");
const journalupdate_dto_1 = require("./journalupdate.dto");
let JournalController = class JournalController {
    constructor(journalService) {
        this.journalService = journalService;
    }
    getAllJournals() {
        console.log("in get");
        return this.journalService.getAllJournals();
    }
    createJournal(createInp) {
        console.log('createInp', createInp);
        return this.journalService.createJournal(createInp);
    }
    updateJournal(updateJournal, id) {
        return this.journalService.updateJournal(updateJournal, id);
    }
    deleteJournal(id) {
        return this.journalService.deleteJournal(id);
    }
};
exports.JournalController = JournalController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JournalController.prototype, "getAllJournals", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [journalInput_dto_1.JournalInputDTO]),
    __metadata("design:returntype", void 0)
], JournalController.prototype, "createJournal", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [journalupdate_dto_1.UpdateJournalDTO, String]),
    __metadata("design:returntype", void 0)
], JournalController.prototype, "updateJournal", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JournalController.prototype, "deleteJournal", null);
exports.JournalController = JournalController = __decorate([
    (0, common_1.Controller)('/api/Journal'),
    __metadata("design:paramtypes", [journal_service_1.JournalService])
], JournalController);
//# sourceMappingURL=journal.controller.js.map