import { Module } from '@nestjs/common';
import { ReceiverService } from './receiver.service';
import { ReceiverController } from './receiver.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Receiver, ReceiverSchema } from './entities/receiver.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Receiver.name,
        schema: ReceiverSchema,
        collection: 'receivers',
      },
    ]),
    UserModule,
  ],
  controllers: [ReceiverController],
  providers: [ReceiverService],
})
export class ReceiverModule {}