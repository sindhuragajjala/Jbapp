import { Controller,Get,Post,Patch, Body, ValidationPipe, Param, Delete, } from "@nestjs/common";
import { JournalService } from "./journal.service";
import { JournalInputDTO } from "./journalInput.dto";
import { UpdateJournalDTO } from "./journalupdate.dto";

@Controller('/api/Journal')
export class JournalController{
    constructor(private journalService: JournalService) {}

    @Get()
    getAllJournals() {
        console.log("in get");
      return this.journalService.getAllJournals();
    }
  
    @Post()
    createJournal(@Body(new ValidationPipe()) createInp: JournalInputDTO) {
      console.log('createInp', createInp);
      return this.journalService.createJournal(createInp);
    }
    @Patch(':id')
    updateJournal(
      @Body(new ValidationPipe()) updateJournal: UpdateJournalDTO,
      @Param('id') id: string,
    ) {
      return this.journalService.updateJournal(updateJournal, id);
    }
  
    @Delete(':id')
    deleteJournal(@Param('id') id: string) {
      return this.journalService.deleteJournal(id);
    }
}