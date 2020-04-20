import { Test, TestingModule } from '@nestjs/testing';
import { QueuesResolver } from './queues.resolver';

describe('QueuesResolver', () => {
  let resolver: QueuesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueuesResolver],
    }).compile();

    resolver = module.get<QueuesResolver>(QueuesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
