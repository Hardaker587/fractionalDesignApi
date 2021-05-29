import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://hardaker:mvkgKhpAAGW7wn2@fractionaldesign.8rlr4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      ),
  },
];
