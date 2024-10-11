import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerProvider } from '../../logger/logger.provider';

import { SurveyResponseModule } from '../surveyResponse/surveyResponse.module';
import { AuthModule } from '../auth/auth.module';
import { WorkspaceModule } from '../workspace/workspace.module';
import { FileModule } from '../file/file.module';

import { DataStatisticController } from './controllers/dataStatistic.controller';
import { SurveyController } from './controllers/survey.controller';
import { SurveyHistoryController } from './controllers/surveyHistory.controller';
import { SurveyMetaController } from './controllers/surveyMeta.controller';
import { SurveyUIController } from './controllers/surveyUI.controller';
import { CollaboratorController } from './controllers/collaborator.controller';
import { DownloadTaskController } from './controllers/downloadTask.controller';
import { SessionController } from './controllers/session.controller';

import { SurveyConf } from '../../models/surveyConf.entity';
import { SurveyHistory } from '../../models/surveyHistory.entity';
import { SurveyMeta } from '../../models/surveyMeta.entity';
import { SurveyResponse } from '../../models/surveyResponse.entity';
import { Word } from '../../models/word.entity';
import { Collaborator } from '../../models/collaborator.entity';
import { DownloadTask } from '../../models/downloadTask.entity';

import { PluginManagerProvider } from '../../securityPlugin/pluginManager.provider';
import { DataStatisticService } from './services/dataStatistic.service';
import { SurveyConfService } from './services/surveyConf.service';
import { SurveyHistoryService } from './services/surveyHistory.service';
import { SurveyMetaService } from './services/surveyMeta.service';
import { ContentSecurityService } from './services/contentSecurity.service';
import { CollaboratorService } from './services/collaborator.service';
import { Counter } from '../../models/counter.entity';
import { CounterService } from '../surveyResponse/services/counter.service';
import { FileService } from '../file/services/file.service';
import { DownloadTaskService } from './services/downloadTask.service';
import { SessionService } from './services/session.service';
import { Session } from '../../models/session.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SurveyMeta,
      SurveyConf,
      SurveyHistory,
      SurveyResponse,
      Word,
      Collaborator,
      Counter,
      DownloadTask,
      Session,
    ]),
    ConfigModule,
    SurveyResponseModule,
    AuthModule,
    WorkspaceModule,
    FileModule,
  ],
  controllers: [
    DataStatisticController,
    SurveyController,
    SurveyHistoryController,
    SurveyMetaController,
    SurveyUIController,
    CollaboratorController,
    DownloadTaskController,
    SessionController,
  ],
  providers: [
    DataStatisticService,
    SurveyHistoryService,
    SurveyConfService,
    SurveyMetaService,
    PluginManagerProvider,
    ContentSecurityService,
    CollaboratorService,
    LoggerProvider,
    CounterService,
    DownloadTaskService,
    FileService,
    SessionService,
  ],
})
export class SurveyModule {}
