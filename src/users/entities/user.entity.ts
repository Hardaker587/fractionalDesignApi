import { ApiProperty } from '@nestjs/swagger';
export class User {
  /**
   * name of the user
   * @example Hablo
   */
  @ApiProperty({ example: 'Hablo', description: 'name of the user' })
  name: string;
  /**
   * role of the user
   * @example Super-duper admin
   */
  @ApiProperty({
    example: 'Super-duper Admin',
    description: 'role of the user',
  })
  role: string;
}
