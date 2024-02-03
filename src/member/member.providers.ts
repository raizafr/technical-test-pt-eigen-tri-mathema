import { Member } from './entities/member.entity';

export const memberProviders = [
  {
    provide: 'MEMBER_REPOSITORY',
    useValue: Member,
  },
];
