import { connect } from 'mongoose';
import key from '../../config/key';

async function run(): Promise<void> {
  await connect(key);
}

export default run;
