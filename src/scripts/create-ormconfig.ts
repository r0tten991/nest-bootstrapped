import { configService } from '../config/config.service';
import fs = require('fs');

fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(configService.getTypeOrmConfigForCli(), null, 2),
);
