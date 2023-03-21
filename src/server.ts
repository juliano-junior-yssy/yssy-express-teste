import { PORT } from '@config';
import app from './app';
import { DbConnector } from './config/mongo.config';

(async () => {
  try {
    const dbConnector = new DbConnector();
    const db = await dbConnector.open();

    app.listen(PORT || 3000, () => console.log(`Server running or port ${PORT || 3000}`));
  } catch (error) {
    console.log(error);
  }
})();
