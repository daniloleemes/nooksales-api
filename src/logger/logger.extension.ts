import { print } from 'graphql'
import { GraphQLExtension } from 'apollo-server-express'
import { RequestDidStartOptions, WillSendResponseOptions, Context } from '../shared/types/ts.type'
import { LoggerService } from '@modules/logger/logger.service'

export class GraphQLLoggerExtension<TContext = unknown> implements GraphQLExtension<Context> {
  private readonly logger: LoggerService

  constructor () {
    this.logger = new LoggerService(GraphQLLoggerExtension.name)
  }

  private removeSensitiveData (query?: string, variables?: { [key: string]: unknown }) {
    delete variables?.password
    return {
      query: query?.replace(/password:\s*"(.+)"/gi, 'password: "???"'),
      variables
    }
  }

  // TODO: is this bad practice?
  // Don't forget to remove sensitive data like passwords
  requestDidStart (options: RequestDidStartOptions<Context>) {
    const { query, variables } = this.removeSensitiveData(options.queryString, options.variables)
    this.logger.log('request', {
      ns: 'graphql',
      req: {
        ...options.request,
        url: options.requestContext.context.req.originalUrl
      },
      graphqlRequest: {
        operationName: options.operationName,
        query,
        variables
      }
    })
  }

  willSendResponse (options: WillSendResponseOptions<Context>) {
    const { graphqlResponse } = options
    this.logger.log('response', {
      ns: 'graphql',
      graphqlResponse
    })
  }
}