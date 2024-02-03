import { Inject, Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { Member } from './entities/member.entity';
import { Response } from 'express';
import { DeleteMemberDto } from './dto/delete-member.dto';
import { BorrowedBook } from 'src/borrowed-book/entities/borrowed-book.entity';

@Injectable()
export class MemberService {
  constructor(
    @Inject('MEMBER_REPOSITORY') private memberRepository: typeof Member,
  ) {}
  async create(createMemberDto: CreateMemberDto, res: Response) {
    const { code, name } = createMemberDto;
    try {
      const store = await this.memberRepository.create({
        code,
        name,
      });
      res
        .status(201)
        .json({ message: 'Successfully added member', data: store });
      console.log(store);
    } catch (err) {
      return res.status(400).json(err.errors);
    }
  }

  async deleteMember(deleteMemberDto: DeleteMemberDto, res: Response) {
    const { code } = deleteMemberDto;
    try {
      const findMember = await this.memberRepository.findOne({
        where: { code },
      });
      if (!findMember) {
        return res
          .status(404)
          .json({ message: `delete failed member code ${code} not found ` });
      }
      await findMember.destroy();
      return res.status(200).json({ message: 'resource delete successfully' });
    } catch (err) {
      return res.status(400).json(err.errors);
    }
  }

  async getAllMember(res: Response) {
    try {
      const members = await this.memberRepository.findAll({
        include: [{ model: BorrowedBook }],
      });
      return res.status(200).json({
        message: 'get all member successfully',
        total: members.length,
        data: members,
      });
    } catch (err) {
      return res.status(400).json(err.errors);
    }
  }

  async findMemberById(memberId: number) {
    try {
      const member = await this.memberRepository.findOne({
        where: { id: memberId },
      });
      return member;
    } catch (err) {
      throw err;
    }
  }
}
