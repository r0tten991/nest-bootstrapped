import {MigrationInterface, QueryRunner} from "typeorm";

export class addUser1627066949912 implements MigrationInterface {
    name = 'addUser1627066949912'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" character varying(300) NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" character varying(300) NOT NULL, "deletedAt" TIMESTAMP, "deletedBy" character varying(300) NOT NULL, "internalComment" character varying(300), "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedBy"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deletedBy"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedBy" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "deletedBy" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastChangedBy" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "deletedAt" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "deletedAt" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastChangedBy"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deletedBy"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedBy"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "deletedBy" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedBy" character varying(300) NOT NULL`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
