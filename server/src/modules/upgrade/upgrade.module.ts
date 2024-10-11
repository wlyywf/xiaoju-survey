import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UpgradeService } from './services/upgrade.service';

import { Collaborator } from '../../models/collaborator.entity';
import { Counter } from '../../models/counter.entity';
import { DownloadTask } from '../../models/downloadTask.entity';
import { MessagePushingLog } from '../../models/messagePushingLog.entity';
import { MessagePushingTask } from '../../models/messagePushingTask.entity';
import { ResponseSchema } from '../../models/responseSchema.entity';
import { Session } from '../../models/session.entity';
import { SurveyConf } from '../../models/surveyConf.entity';
import { SurveyHistory } from '../../models/surveyHistory.entity';
import { SurveyMeta } from '../../models/surveyMeta.entity';
import { SurveyResponse } from '../../models/surveyResponse.entity';
import { User } from '../../models/user.entity';
import { Workspace } from '../../models/workspace.entity';
import { WorkspaceMember } from '../../models/workspaceMember.entity';

import { UpgradeController } from './controllers/upgrade.controller';
import { AuthModule } from '../auth/auth.module';

import { Logger } from '../../logger';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Collaborator,
      Counter,
      DownloadTask,
      MessagePushingLog,
      MessagePushingTask,
      ResponseSchema,
      Session,
      SurveyConf,
      SurveyHistory,
      SurveyMeta,
      SurveyResponse,
      User,
      Workspace,
      WorkspaceMember,
    ]),
    ConfigModule,
    AuthModule,
  ],
  controllers: [UpgradeController],
  providers: [UpgradeService, Logger],
  exports: [UpgradeService],
})
export class UpgradeModule {}
