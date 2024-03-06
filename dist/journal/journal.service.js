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
exports.JournalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const journal_entity_1 = require("./journal.entity");
const typeorm_2 = require("typeorm");
let JournalService = class JournalService {
    constructor(journalRepo) {
        this.journalRepo = journalRepo;
    }
    async getAllJournals() {
        return this.journalRepo.find();
    }
    async createJournal(inp) {
        const newJournal = this.journalRepo.create(inp);
        console.log('newJournal', newJournal);
        const savedJournal = await this.journalRepo.save(newJournal);
        return savedJournal;
    }
    async updateJournal(inp, id) {
        const res = await this.journalRepo.update(id, { ...inp });
        return 'success';
    }
    async deleteJournal(id) {
        const res = await this.journalRepo.delete(id);
        console.log('response');
        return 'success';
    }
};
exports.JournalService = JournalService;
exports.JournalService = JournalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(journal_entity_1.JournalEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], JournalService);
//# sourceMappingURL=journal.service.js.map