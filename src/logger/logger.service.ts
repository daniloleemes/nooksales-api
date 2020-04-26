import pino from 'pino'
import { LoggerService as NestJSLogger } from '@nestjs/common'
import { Logger as TypeORMLogger, QueryRunner } from 'typeorm'

export const pinoLogger = pino({
  level: 'debug',
  base: { v: 1 }
})

export class LoggerService implements NestJSLogger {
  private readonly logger: pino.Logger

  constructor (context?: string) {
    this.logger = pinoLogger.child({ ns: context })
  }

  log(message: string): void

  log(message: string, obj?: object): void

  log(message: string, context?: string): void

  log (message: string, objOrContext?: object | string) {
    if (typeof objOrContext === 'string') {
      this.logger.info({ ns: objOrContext }, message)
    } else if (typeof objOrContext === 'object') {
      this.logger.info(objOrContext, message)
    } else {
      this.logger.info(message)
    }
  }

  warn(message: string): void

  warn(message: string, obj?: object): void

  warn (message: string, obj?: object) {
    if (obj) {
      this.logger.warn(obj, message)
    } else {
      this.logger.warn(message)
    }
  }

  debug(message: string): void

  debug(message: string, obj?: object): void

  debug (message: string, obj?: object) {
    if (obj) {
      this.logger.debug(obj, message)
    } else {
      this.logger.debug(message)
    }
  }

  verbose(message: string): void

  verbose(message: string, obj?: object): void

  verbose (message: string, obj?: object) {
    if (obj) {
      this.logger.trace(obj, message)
    } else {
      this.logger.trace(message)
    }
  }

  error(err: Error, obj?: object): void

  error(message: string, obj?: object): void

  error(message: string, trace?: string): void

  error(message: string, trace?: string, obj?: object): void

  error (msgOrError: string | Error, objOrTrace?: object | string, objOrContext?: object | string): void {
    const { message, info } = this.parseError(msgOrError, objOrTrace, objOrContext)
    this.logger.error(info, message)
  }

  fatal(err: Error, obj?: object): void

  fatal(message: string, obj?: object): void

  fatal(message: string, trace?: string): void

  fatal(message: string, trace?: string, obj?: object): void

  fatal (msgOrError: string | Error, objOrTrace?: object | string, objOrContext?: object | string): void {
    const { message, info } = this.parseError(msgOrError, objOrTrace, objOrContext)
    this.logger.fatal(info, message)
  }

  private parseError (msgOrError: string | Error, objOrTrace?: object | string, objOrContext?: object | string) {
    let message = 'Unknown Error'
    let info = {}

    if (msgOrError instanceof Error) {
      message = msgOrError.message || message
      info = { stack: msgOrError.stack }
    } else {
      message = msgOrError
    }

    if (typeof objOrTrace === 'string') {
      info = { stack: objOrTrace }
    } else {
      info = { ...objOrTrace, ...info }
    }

    if (typeof objOrContext === 'string') {
      info = { ...info, ns: objOrContext }
    } else if (objOrContext) {
      info = { ...objOrContext, ...info }
    }

    return { message, info }
  }
}

// TODO: https://github.com/typeorm/typeorm/blob/master/docs/logging.md
export class DatabaseLoggerService extends LoggerService implements TypeORMLogger {
  constructor () {
    super(DatabaseLoggerService.name)
  }

  logQuery (query: string, parameters?: unknown[] | undefined, queryRunner?: QueryRunner | undefined) {
    throw new Error('Method not implemented.')
  }

  logQueryError (
    error: string,
    query: string,
    parameters?: unknown[] | undefined,
    queryRunner?: QueryRunner | undefined
  ) {
    if (error) throw new Error('Method not implemented.')
  }

  logQuerySlow (time: number, query: string, parameters?: unknown[] | undefined, queryRunner?: QueryRunner | undefined) {
    throw new Error('Method not implemented.')
  }

  logSchemaBuild (message: string, queryRunner?: QueryRunner | undefined) {
    throw new Error('Method not implemented.')
  }

  logMigration (message: string, queryRunner?: QueryRunner | undefined) {
    throw new Error('Method not implemented.')
  }
}