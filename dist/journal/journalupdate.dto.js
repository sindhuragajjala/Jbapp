"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJournalDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const journalInput_dto_1 = require("./journalInput.dto");
class UpdateJournalDTO extends (0, mapped_types_1.PartialType)(journalInput_dto_1.JournalInputDTO) {
}
exports.UpdateJournalDTO = UpdateJournalDTO;
//# sourceMappingURL=journalupdate.dto.js.map