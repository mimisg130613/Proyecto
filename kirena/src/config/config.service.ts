import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
import { parse } from "dotenv";

@Injectable()
export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor() {
        const env = process.env.NODE_ENV || 'development';
        const envFilePath = `${__dirname}/../../.env.${env}`;
        console.log("*****",envFilePath);

        if (env === 'development') {
            const devPath = join(process.cwd(), '.env.development');
            if (!fs.existsSync(devPath)) {
                console.log('.env.development no existe DEVELOPMENT');
                process.exit(0);
            }
            this.envConfig = parse(fs.readFileSync(devPath));
        } else {
            const prodPath = join(process.cwd(), '.env.production');
            if (!fs.existsSync(prodPath)) {
                console.log('.env.production no existe PRODUCTION');
                process.exit(0);
            }
            this.envConfig = parse(fs.readFileSync(prodPath));
        }
    }

    get(key: string): string {
        return this.envConfig[key];
    }
}