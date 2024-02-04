import { Test, TestingModule } from '@nestjs/testing';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import { Response } from 'express';
import { memberProviders } from './member.providers';
import { CreateMemberDto } from './dto/create-member.dto';
import { DeleteMemberDto } from './dto/delete-member.dto';

describe('MemberController', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let memberController: MemberController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let memberService: MemberService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MemberController],
      providers: [MemberService, ...memberProviders],
    }).compile();

    memberController = app.get<MemberController>(MemberController);
    memberService = app.get<MemberService>(MemberService);
  });
  describe('getAllMember', () => {
    it('harus memanggil method getAllMember di MemberService dengan parameter yang benar', async () => {
      const mockResponse = {} as Response;
      const getAllMemberSpy = jest
        .spyOn(memberService, 'getAllMember')
        .mockResolvedValue(mockResponse);
      await memberController.getAllMember(mockResponse as any);
      expect(getAllMemberSpy).toHaveBeenCalledWith(mockResponse);
    });
  });

  describe('create', () => {
    it('harus memanggil method create di MemberService dengan parameter yang benar', async () => {
      const createMemberDto = {} as CreateMemberDto;
      const mockResponse = {} as Response;
      const createSpy = jest
        .spyOn(memberService, 'create')
        .mockResolvedValue(mockResponse);
      await memberController.create(createMemberDto, mockResponse as any);
      expect(createSpy).toHaveBeenCalledWith(createMemberDto, mockResponse);
    });
  });

  describe('deleteMember', () => {
    it('harus memanggil method deleteMember di MemberService dengan parameter yang benar', async () => {
      const deleteMemberDto = {} as DeleteMemberDto;
      const mockResponse = {} as Response;
      const deleteMemberSpy = jest
        .spyOn(memberService, 'deleteMember')
        .mockResolvedValue(mockResponse);
      await memberController.deleteMember(deleteMemberDto, mockResponse as any);
      expect(deleteMemberSpy).toHaveBeenCalledWith(
        deleteMemberDto,
        mockResponse,
      );
    });
  });
});
