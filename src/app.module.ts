import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JournalEntity } from './journal/journal.entity';
import { JournalController } from './journal/journal.controller';
import { JournalService } from './journal/journal.service';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    url: 'mongodb://admin:%241Ndhura@13.201.31.85:27017/?authMechanism=SCRAM-SHA-1',
    // database: DB_NAME,
    entities: [JournalEntity],
  }),
  TypeOrmModule.forFeature([JournalEntity]),],
  controllers: [JournalController],
  providers: [JournalService],
})
export class AppModule {}
