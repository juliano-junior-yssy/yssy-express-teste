import { MONGO_URI, MONGO_DB } from '@config';
import * as mongoDB from 'mongodb';

export class DbConnector {
  private mongoClient: mongoDB.MongoClient;
  private conn: any;
  private db: any;

  constructor() {
    this.mongoClient = new mongoDB.MongoClient(MONGO_URI as string);
  }

  public async open() {
    this.mongoClient = new mongoDB.MongoClient(MONGO_URI as string);

    this.conn = await this.mongoClient.connect();

    this.db = this.conn.db(MONGO_DB);
    return this.db;
  }
}
