import { ApiError, BadRequestError, ConflictError } from '@errors/api.error';
import { objectIsEmpty } from '@utils/index.util';
import { DbConnector } from '@config';
import { ObjectId } from 'mongodb';

export class HelloService {
  public async find() {
    const dbConnector = new DbConnector();
    const db = await dbConnector.open();

    const result = await db.collection('places').find().toArray();
    return result;
  }

  public async findOne(id: string) {
    const dbConnector = new DbConnector();
    const db = await dbConnector.open();

    const result = await db
      .collection('places')
      .findOne({ _id: new ObjectId(id) });

    return result;
  }

  public async create(body: any) {
    const { name, address, coordinates } = body;

    if (!name || !address || !coordinates)
      throw new BadRequestError('Requisição inválida');

    const dbConnector = new DbConnector();
    const db = await dbConnector.open();

    const result = await db.collection('places').insertOne({
      name,
      address,
      coordinates,
    });

    return result;
  }

  public async update(id: string, body: any) {
    const { name, address, coordinates } = body;

    if (!name || !address || !coordinates)
      throw new BadRequestError('Requisição inválida');

    const dbConnector = new DbConnector();
    const db = await dbConnector.open();

    const result = await db
      .collection('places')
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: { name, address, coordinates } }
      );

    return result;
  }

  public async delete(id: string) {
    const dbConnector = new DbConnector();
    const db = await dbConnector.open();

    const result = await db
      .collection('places')
      .deleteOne({ _id: new ObjectId(id) });

    return result;
  }
}
