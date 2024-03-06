import { JournalService } from "./journal.service";
import { JournalInputDTO } from "./journalInput.dto";
import { UpdateJournalDTO } from "./journalupdate.dto";
export declare class JournalController {
    private journalService;
    constructor(journalService: JournalService);
    getAllJournals(): Promise<import("./journal.entity").JournalEntity[]>;
    createJournal(createInp: JournalInputDTO): Promise<import("./journal.entity").JournalEntity>;
    updateJournal(updateJournal: UpdateJournalDTO, id: string): Promise<string>;
    deleteJournal(id: string): Promise<string>;
}
