import { JournalEntity } from "./journal.entity";
import { Repository } from "typeorm";
import { JournalInputDTO } from "./journalInput.dto";
import { UpdateJournalDTO } from "./journalupdate.dto";
export declare class JournalService {
    private journalRepo;
    constructor(journalRepo: Repository<JournalEntity>);
    getAllJournals(): Promise<JournalEntity[]>;
    createJournal(inp: JournalInputDTO): Promise<JournalEntity>;
    updateJournal(inp: UpdateJournalDTO, id: string): Promise<string>;
    deleteJournal(id: string): Promise<string>;
}
